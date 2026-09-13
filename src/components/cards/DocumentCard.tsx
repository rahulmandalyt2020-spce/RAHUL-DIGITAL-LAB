import React from 'react';
import { FileText, Download, Eye, Calendar, HardDrive, CheckCircle } from 'lucide-react';
import { DocumentItem } from '../../types/index.ts';
import { Badge } from '../common/Badge.tsx';
import { Button } from '../common/Button.tsx';
import { useRouter } from '../../context/RouterContext.tsx';

interface DocumentCardProps {
  document: DocumentItem;
}

export const DocumentCard: React.FC<DocumentCardProps> = ({ document }) => {
  const { showToast, openModal } = useRouter();

  const handleDownload = () => {
    showToast(`${document.fileName}: Technical summary open. Resource is currently in preparation.`);
    openModal('document', document);
  };

  const handlePreview = () => {
    openModal('document', document);
  };

  const getFormatBadge = () => {
    switch (document.type) {
      case 'PDF':
        return <Badge variant="purple" size="sm">PDF</Badge>;
      case 'DOCX':
        return <Badge variant="blue" size="sm">DOCX</Badge>;
      case 'ZIP':
        return <Badge variant="amber" size="sm">ZIP</Badge>;
      default:
        return <Badge variant="slate" size="sm">{document.type}</Badge>;
    }
  };

  return (
    <div className="flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-[#090e1c] border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 shadow-xl group hover:shadow-[0_0_25px_-5px_rgba(6,182,212,0.15)]">
      <div className="space-y-4">
        {/* Header with Type badge, Category, and Status */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-[#050811] border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/40 transition-all">
              <FileText className="w-5 h-5" />
            </div>
            {getFormatBadge()}
          </div>
          <div className="flex items-center gap-2">
            {document.status && (
              <Badge variant="slate" size="sm" className="text-[10px]">
                {document.status}
              </Badge>
            )}
            <span className="text-xs font-mono text-slate-400">
              {document.category}
            </span>
          </div>
        </div>

        <div>
          <h3 className="text-base sm:text-lg font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
            {document.fileName}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300/90 mt-1.5 leading-relaxed">
            {document.description}
          </p>
        </div>

        {/* Metadata Details */}
        <div className="flex items-center justify-between text-xs text-slate-400 font-mono py-2 border-y border-slate-800/70">
          <span className="flex items-center gap-1.5">
            <HardDrive className="w-3.5 h-3.5 text-cyan-400" />
            {document.fileSize}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-slate-500" />
            {document.updatedAt || 'Recent'}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-2 gap-2.5 pt-5 mt-3 border-t border-slate-800/80">
        <Button
          variant="secondary"
          size="sm"
          onClick={handlePreview}
          icon={<Eye className="w-3.5 h-3.5" />}
        >
          Preview
        </Button>

        <Button
          variant="primary"
          size="sm"
          onClick={handleDownload}
          icon={<FileText className="w-3.5 h-3.5" />}
        >
          View Spec
        </Button>
      </div>
    </div>
  );
};
