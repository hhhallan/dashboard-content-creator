'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { File, FileText, ImageIcon, Upload, Video, X } from 'lucide-react';
import type React from 'react';
import { useCallback, useRef, useState } from 'react';

interface FileWithPreview extends File {
  preview?: string;
}

interface DragDropInputProps {
  onFilesChange?: (files: File[]) => void;
  accept?: string;
  multiple?: boolean;
  maxSize?: number; // en MB
  className?: string;
  disabled?: boolean;
}

export function DragDropInput({
  onFilesChange,
  accept = '*/*',
  multiple = true,
  maxSize = 10,
  className,
  disabled = false,
}: DragDropInputProps) {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [videoOnly, setVideoOnly] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateFile = useCallback(
    (file: File): boolean => {
      if (file.size > maxSize * 1024 * 1024) {
        setError(
          `Le fichier "${file.name}" dépasse la taille maximale de ${maxSize}MB`
        );
        return false;
      }
      if (videoOnly && !file.type.startsWith('video/')) {
        setError(`Seuls les fichiers vidéo sont acceptés`);
        return false;
      }
      return true;
    },
    [maxSize, videoOnly]
  );

  const processFiles = useCallback(
    (fileList: FileList) => {
      const validFiles: FileWithPreview[] = [];

      Array.from(fileList).forEach(file => {
        if (validateFile(file)) {
          const fileWithPreview = file as FileWithPreview;

          if (
            file.type.startsWith('image/') ||
            file.type.startsWith('video/')
          ) {
            fileWithPreview.preview = URL.createObjectURL(file);
          }

          validFiles.push(fileWithPreview);
        }
      });

      if (validFiles.length > 0) {
        setError(null);
        const newFiles = multiple ? [...files, ...validFiles] : validFiles;
        setFiles(newFiles);
        onFilesChange?.(newFiles);
      }
    },
    [files, multiple, onFilesChange, validateFile]
  );

  const handleDragOver = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      if (!disabled) {
        setIsDragOver(true);
      }
    },
    [disabled]
  );

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);

      if (disabled) return;

      const droppedFiles = e.dataTransfer.files;
      if (droppedFiles.length > 0) {
        processFiles(droppedFiles);
      }
    },
    [disabled, processFiles]
  );

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFiles = e.target.files;
      if (selectedFiles && selectedFiles.length > 0) {
        processFiles(selectedFiles);
      }
    },
    [processFiles]
  );

  const removeFile = useCallback(
    (index: number) => {
      const newFiles = files.filter((_, i) => i !== index);
      setFiles(newFiles);
      onFilesChange?.(newFiles);

      if (files[index].preview) {
        URL.revokeObjectURL(files[index].preview!);
      }
    },
    [files, onFilesChange]
  );

  const openFileDialog = useCallback(() => {
    if (!disabled) {
      fileInputRef.current?.click();
    }
  }, [disabled]);

  const getFileIcon = (file: File) => {
    if (file.type.startsWith('image/')) {
      return <ImageIcon className="h-4 w-4" />;
    } else if (file.type.startsWith('video/')) {
      return <Video className="h-4 w-4" />;
    } else if (file.type.includes('text') || file.type.includes('document')) {
      return <FileText className="h-4 w-4" />;
    }
    return <File className="h-4 w-4" />;
  };

  return (
    <div className={cn('w-full', className)}>
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={openFileDialog}
        className={cn(
          'relative border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors',
          'hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
          isDragOver && 'border-primary bg-primary/5',
          disabled && 'opacity-50 cursor-not-allowed',
          error ? 'border-destructive' : 'border-border'
        )}
        role="button"
        tabIndex={0}
        aria-label="Zone de glisser-déposer pour les fichiers"
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={videoOnly ? 'video/*' : accept}
          multiple={multiple}
          onChange={handleFileSelect}
          className="hidden"
          disabled={disabled}
        />

        <div className="flex flex-col items-center gap-4">
          <div
            className={cn(
              'rounded-full p-4 transition-colors',
              isDragOver ? 'bg-primary text-primary-foreground' : 'bg-muted'
            )}
          >
            <Upload className="h-8 w-8" />
          </div>

          <div className="space-y-2">
            <p className="text-lg font-medium">
              {isDragOver
                ? 'Déposez vos fichiers ici'
                : 'Glissez et déposez vos fichiers'}
            </p>
            <p className="text-sm text-muted-foreground">
              ou cliquez pour sélectionner des fichiers
            </p>
            <p className="text-xs text-muted-foreground">
              Taille maximale: {maxSize}MB{' '}
              {multiple && '• Plusieurs fichiers autorisés'}
              {videoOnly && ' • Vidéos uniquement'}
            </p>
          </div>
        </div>
      </div>

      {error && (
        <div className="mt-2 p-3 bg-destructive/10 border border-destructive/20 rounded-md">
          <p className="text-sm text-destructive">{error}</p>
        </div>
      )}

      {files.length > 0 && (
        <div className="mt-4 space-y-4">
          <h4 className="text-sm font-medium">
            Fichiers sélectionnés ({files.length})
          </h4>
          <div className="space-y-6">
            {files.map((file, index) => (
              <div
                key={`${file.name}-${index}`}
                className="relative group border rounded-lg overflow-hidden bg-card"
              >
                <div className="flex items-center justify-between p-4 border-b bg-muted/50">
                  <div className="flex items-center space-x-3">
                    {getFileIcon(file)}
                    <div>
                      <p className="font-medium">{file.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                        {file.type &&
                          ` • ${file.type.split('/')[1].toUpperCase()}`}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFile(index)}
                    className="h-8 w-8 p-0"
                    disabled={disabled}
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Supprimer {file.name}</span>
                  </Button>
                </div>
                <div className="p-4">
                  {file.preview ? (
                    file.type.startsWith('image/') ? (
                      <img
                        src={file.preview || '/placeholder.svg'}
                        alt={file.name}
                        className="w-full rounded-lg shadow-sm"
                        style={{ maxHeight: '400px', objectFit: 'contain' }}
                      />
                    ) : file.type.startsWith('video/') ? (
                      <video
                        src={file.preview}
                        controls
                        className="w-full rounded-lg shadow-sm"
                        style={{ maxHeight: '400px' }}
                        preload="metadata"
                      />
                    ) : (
                      <div className="h-32 w-full flex items-center justify-center bg-muted rounded-lg">
                        {getFileIcon(file)}
                        <span className="ml-2 text-sm text-muted-foreground">
                          Aperçu non disponible
                        </span>
                      </div>
                    )
                  ) : (
                    <div className="h-32 w-full flex items-center justify-center bg-muted rounded-lg">
                      {getFileIcon(file)}
                      <span className="ml-2 text-sm text-muted-foreground">
                        Aperçu non disponible
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
