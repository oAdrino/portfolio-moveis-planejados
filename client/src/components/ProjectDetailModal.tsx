import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '@/data/projects';

interface ProjectDetailModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectDetailModal({
  project,
  isOpen,
  onClose,
}: ProjectDetailModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen) return null;

  const currentImage = project.images[currentImageIndex];

  const handlePrevious = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white rounded-full hover:bg-gray-100 transition-colors z-10"
        >
          <X className="w-6 h-6 text-black" />
        </button>

        {/* Main Gallery Content */}
        <div className="w-full max-w-4xl max-h-screen flex flex-col bg-white rounded-lg overflow-hidden">
          {/* Image Viewer */}
          <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden">
            <img
              src={currentImage}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              className="w-full h-full object-contain"
            />

            {/* Navigation Buttons */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-black" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-black" />
                </button>
              </>
            )}

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/60 text-white rounded-full text-sm">
              {currentImageIndex + 1} / {project.images.length}
            </div>
          </div>

          {/* Info and Thumbnails */}
          <div className="bg-white p-6">
            {/* Project Info */}
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                {project.title}
              </h2>
              <p className="text-muted-foreground">{project.description}</p>
            </div>

            {/* Thumbnails Grid */}
            {project.images.length > 1 && (
              <div className="mt-4 pt-4 border-t">
                <p className="text-sm font-semibold text-foreground mb-3">
                  Galeria
                </p>
                <div className="grid grid-cols-6 md:grid-cols-8 gap-2 max-h-24 overflow-y-auto">
                  {project.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative aspect-square rounded overflow-hidden border-2 transition-all ${
                        currentImageIndex === index
                          ? 'border-primary'
                          : 'border-transparent hover:border-gray-300'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
