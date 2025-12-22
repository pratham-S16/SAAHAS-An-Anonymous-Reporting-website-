"use client";
import React from 'react';
import { X } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function InfoModal({ isOpen, onClose }: InfoModalProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 animate-in fade-in" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl w-[90vw] max-w-md p-6 md:p-8 z-50 animate-in fade-in zoom-in-95">
          <Dialog.Title className="text-2xl text-gray-900 mb-4" style={{ fontWeight: 600 }}>
            What Happens Next
          </Dialog.Title>
          
          <Dialog.Close asChild>
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </Dialog.Close>

          <div className="space-y-4 text-gray-600">
            <div className="space-y-2">
              <h3 className="text-gray-900" style={{ fontWeight: 500 }}>
                1. Report Review
              </h3>
              <p className="text-sm leading-relaxed">
                Your report is securely submitted and reviewed by trained professionals within 24-48 hours.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-gray-900" style={{ fontWeight: 500 }}>
                2. Tracking Token
              </h3>
              <p className="text-sm leading-relaxed">
                You'll receive a unique tracking code. Save it to check your report status anytime without revealing your identity.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-gray-900" style={{ fontWeight: 500 }}>
                3. Investigation
              </h3>
              <p className="text-sm leading-relaxed">
                If needed, appropriate authorities or support teams are contacted. You remain anonymous throughout.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-gray-900" style={{ fontWeight: 500 }}>
                4. Support Resources
              </h3>
              <p className="text-sm leading-relaxed">
                We'll provide access to counseling and support services through your tracking portal.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-100">
            <p className="text-sm text-gray-500 text-center">
              Your privacy is protected at every step
            </p>
          </div>

          <Dialog.Close asChild>
            <button className="mt-6 w-full py-3 px-4 bg-[#565EEB] hover:bg-[#4850d4] text-white rounded-lg transition-colors">
              Got it
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
