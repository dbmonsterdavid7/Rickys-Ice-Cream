import React, { useState } from 'react';
import { X, Check, Copy, Server, ShieldCheck, RefreshCw } from 'lucide-react';

interface HostingerGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HostingerGuideModal({ isOpen, onClose }: HostingerGuideModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const htaccessCode = `<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(htaccessCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        id="hostinger-guide-modal"
        className="relative w-full max-w-3xl bg-white rounded-[32px] shadow-2xl border border-zinc-300 overflow-hidden max-h-[90vh] flex flex-col text-zinc-900"
      >
        {/* Header */}
        <div className="px-6 py-5 bg-black text-white flex items-center justify-between border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white text-black flex items-center justify-center shadow-xs">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black text-white tracking-wide">
                Hostinger SPA Deployment Guide
              </h3>
              <p className="text-xs text-zinc-400">
                How React Router & .htaccess work seamlessly on Hostinger
              </p>
            </div>
          </div>
          <button 
            id="close-hostinger-modal-btn"
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-full hover:bg-zinc-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-zinc-900">
          {/* Status Alert */}
          <div className="p-4 bg-zinc-100 border border-zinc-300 rounded-2xl flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-black mt-0.5 shrink-0" />
            <div>
              <p className="font-black text-black text-sm">
                Ready for Hostinger Deployment!
              </p>
              <p className="text-xs text-zinc-600 mt-0.5 leading-relaxed font-normal">
                The required <code className="font-mono bg-white px-1 py-0.5 rounded text-black border border-zinc-200">.htaccess</code> file has already been generated in <code className="font-mono bg-white px-1 py-0.5 rounded text-black border border-zinc-200">/public/.htaccess</code>. Vite will automatically copy it to <code className="font-mono bg-white px-1 py-0.5 rounded text-black border border-zinc-200">dist/.htaccess</code> when you run <code className="font-mono bg-white px-1 py-0.5 rounded text-black border border-zinc-200">npm run build</code>.
              </p>
            </div>
          </div>

          {/* Step 1 */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs font-black">1</span>
              <h4 className="font-black text-black text-base">Build the Production Bundle</h4>
            </div>
            <p className="text-zinc-600 pl-8 text-xs font-normal">
              Run the standard build command in your project terminal:
            </p>
            <div className="ml-8 bg-zinc-950 text-white p-3 rounded-2xl font-mono text-xs flex items-center justify-between border border-zinc-800">
              <code>npm run build</code>
              <span className="text-zinc-400 text-[11px]">Generates ./dist folder</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs font-black">2</span>
              <h4 className="font-black text-black text-base">Upload to Hostinger public_html</h4>
            </div>
            <ul className="list-disc list-inside text-zinc-600 pl-8 space-y-1 text-xs leading-relaxed font-normal">
              <li>Log in to your <strong>Hostinger hPanel</strong> → Go to <strong>File Manager</strong>.</li>
              <li>Navigate inside the <strong>public_html</strong> directory of your domain.</li>
              <li>Upload all files from the local <code className="font-mono bg-zinc-100 px-1 py-0.5 rounded text-black">dist/</code> folder into <code className="font-mono bg-zinc-100 px-1 py-0.5 rounded text-black">public_html/</code>.</li>
            </ul>
          </div>

          {/* Step 3: .htaccess Code */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs font-black">3</span>
                <h4 className="font-black text-black text-base">The .htaccess Routing Configuration</h4>
              </div>
              <button
                id="copy-htaccess-code-btn"
                onClick={copyToClipboard}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-100 hover:bg-zinc-200 text-black border border-zinc-300 rounded-full text-xs font-bold transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-black" />
                    <span className="text-black font-black">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-black" />
                    <span>Copy .htaccess</span>
                  </>
                )}
              </button>
            </div>
            <p className="text-zinc-600 pl-8 text-xs font-normal">
              This Apache rewrite rule instructs the Hostinger server to route all clean URLs (<code className="font-mono">/about</code>, <code className="font-mono">/services</code>, <code className="font-mono">/contact</code>) to <code className="font-mono">index.html</code> so React Router can render them without 404 errors on page refresh:
            </p>
            <div className="ml-8 bg-zinc-950 text-zinc-100 p-4 rounded-2xl font-mono text-xs border border-zinc-800 overflow-x-auto leading-relaxed">
              <pre>{htaccessCode}</pre>
            </div>
          </div>

          {/* Step 4: Verification */}
          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-2">
            <div className="flex items-center gap-2 text-black font-semibold">
              <RefreshCw className="w-4 h-4 text-black" />
              <span className="font-black text-black">How to verify on your live Hostinger site</span>
            </div>
            <p className="text-xs text-zinc-600 font-normal">
              After upload, test by typing <code className="font-mono bg-white px-1.5 py-0.5 rounded border border-zinc-300 text-black">https://yourdomain.com/about</code> directly into your URL bar and hit Enter, or refresh any sub-page. You will immediately see the corresponding page load cleanly!
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-zinc-50 border-t border-zinc-200 flex items-center justify-between">
          <span className="text-xs text-zinc-500 font-medium">
            Also saved locally as <code className="font-mono text-black font-bold">HOSTINGER_DEPLOYMENT.md</code>
          </span>
          <button
            id="got-it-modal-btn"
            onClick={onClose}
            className="px-6 py-2.5 bg-black hover:bg-zinc-800 text-white rounded-full font-black text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-sm"
          >
            Got it, thanks!
          </button>
        </div>
      </div>
    </div>
  );
}
