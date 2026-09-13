import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { RoutePath } from '../types/index.ts';

interface ModalState {
  type: 'app' | 'prompt' | 'creation' | 'project' | 'document' | 'video-prompt' | 'video-watch' | null;
  data?: any;
}

interface RouterContextType {
  currentPath: RoutePath;
  navigate: (path: RoutePath, params?: Record<string, string>) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isLoginOpen: boolean;
  setIsLoginOpen: (open: boolean) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  modal: ModalState;
  openModal: (type: ModalState['type'], data?: any) => void;
  closeModal: () => void;
  toast: { message: string; visible: boolean };
  showToast: (message: string) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

// Helper to sanitize path
function normalizePath(rawPath: string): RoutePath {
  const validPaths: RoutePath[] = [
    '/',
    '/apps',
    '/prompts',
    '/creations',
    '/video-prompts',
    '/documents',
    '/projects',
    '/about',
    '/contact',
  ];

  if (typeof window !== 'undefined') {
    // Check hash first (e.g. #/apps or #apps)
    const rawHash = window.location.hash.replace(/^#\/?/, '/');
    if (rawHash.startsWith('/')) {
      const matchedHash = validPaths.find((p) => p === rawHash);
      if (matchedHash) return matchedHash;
    }
  }

  const cleanPath = (rawPath || '/').replace(/\/+$/, '') || '/';
  const matched = validPaths.find((p) => p === cleanPath);
  return matched || '/';
}

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<RoutePath>(() => {
    if (typeof window === 'undefined') return '/';
    return normalizePath(window.location.pathname);
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [modal, setModal] = useState<ModalState>({ type: null });
  const [toast, setToast] = useState<{ message: string; visible: boolean }>({
    message: '',
    visible: false,
  });

  const showToast = useCallback((message: string) => {
    setToast({ message, visible: true });
    setTimeout(() => {
      setToast((prev) => (prev.message === message ? { ...prev, visible: false } : prev));
    }, 2800);
  }, []);

  const openModal = useCallback((type: ModalState['type'], data?: any) => {
    setModal({ type, data });
  }, []);

  const closeModal = useCallback(() => {
    setModal({ type: null });
  }, []);

  // Listen to popstate and hashchange
  useEffect(() => {
    const handleLocationChange = () => {
      const nextPath = normalizePath(window.location.pathname);
      setCurrentPath(nextPath);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigate = useCallback((path: RoutePath, _params?: Record<string, string>) => {
    try {
      window.history.pushState({}, '', path);
    } catch {
      window.location.hash = path;
    }
    setCurrentPath(path);
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
    setModal({ type: null });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <RouterContext.Provider
      value={{
        currentPath,
        navigate,
        searchQuery,
        setSearchQuery,
        isSearchOpen,
        setIsSearchOpen,
        isLoginOpen,
        setIsLoginOpen,
        isMobileMenuOpen,
        setIsMobileMenuOpen,
        modal,
        openModal,
        closeModal,
        toast,
        showToast,
      }}
    >
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = (): RouterContextType => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};
