"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";

const COOKIE_CONSENT_KEY = "agency-cookie-consent";

type ConsentChoice = "accepted" | "declined" | null;

export function ConsentBanner() {
  const [consent, setConsent] = useState<ConsentChoice>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check for existing consent
    const storedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!storedConsent) {
      // Show banner if no consent has been given yet
      setTimeout(() => setIsVisible(true), 1500);
    } else {
      setConsent(storedConsent as ConsentChoice);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setConsent("accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setConsent("declined");
    setIsVisible(false);
  };

  // Don't render if user has already made a choice
  if (consent === "accepted" || consent === "declined") {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-surface border-t border-surface-alt shadow-lg"
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Cookie className="w-5 h-5 text-accent" />
              </div>
              <div className="text-sm text-text-secondary">
                <p className="font-medium text-text-primary mb-1">
                  We value your privacy
                </p>
                <p>
                  We use cookies to enhance your browsing experience, serve personalized
                  content, and analyze our traffic. By clicking &quot;Accept&quot;, you consent
                  to our use of cookies.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <Button variant="ghost" size="sm" onClick={handleDecline}>
                Decline
              </Button>
              <Button size="sm" onClick={handleAccept}>
                Accept
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}