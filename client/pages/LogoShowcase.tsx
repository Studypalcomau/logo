import React from "react";
import StudypalLogo, {
  StudypalIcon,
  StudypalText,
  getStudypalLogoSVG,
} from "../components/StudypalLogo";

const LogoShowcase: React.FC = () => {
  const downloadSVG = (content: string, filename: string) => {
    const blob = new Blob([content], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Studypal Logo Assets
          </h1>
          <p className="text-lg text-gray-600">
            Developer-ready logo components and assets
          </p>
        </div>

        {/* Logo Variations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Light Theme */}
          <div className="bg-white rounded-lg p-8 shadow-sm border">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">
              Light Theme
            </h2>

            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <StudypalLogo size="xl" theme="light" />
                  <span className="text-sm text-gray-500">Full Logo - XL</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <StudypalLogo size="lg" theme="light" />
                  <span className="text-sm text-gray-500">
                    Full Logo - Large
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <StudypalLogo size="md" theme="light" />
                  <span className="text-sm text-gray-500">
                    Full Logo - Medium
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <StudypalIcon size="lg" theme="light" />
                  <span className="text-sm text-gray-500">Icon Only</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <StudypalText size="lg" theme="light" />
                  <span className="text-sm text-gray-500">Text Only</span>
                </div>
              </div>
            </div>
          </div>

          {/* Dark Theme */}
          <div className="bg-gray-900 rounded-lg p-8 shadow-sm border">
            <h2 className="text-2xl font-semibold mb-6 text-white">
              Dark Theme
            </h2>

            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 border border-gray-700 rounded-lg">
                <div className="flex items-center space-x-4">
                  <StudypalLogo size="xl" theme="dark" />
                  <span className="text-sm text-gray-400">Full Logo - XL</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-700 rounded-lg">
                <div className="flex items-center space-x-4">
                  <StudypalLogo size="lg" theme="dark" />
                  <span className="text-sm text-gray-400">
                    Full Logo - Large
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-700 rounded-lg">
                <div className="flex items-center space-x-4">
                  <StudypalLogo size="md" theme="dark" />
                  <span className="text-sm text-gray-400">
                    Full Logo - Medium
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-700 rounded-lg">
                <div className="flex items-center space-x-4">
                  <StudypalIcon size="lg" theme="dark" />
                  <span className="text-sm text-gray-400">Icon Only</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-700 rounded-lg">
                <div className="flex items-center space-x-4">
                  <StudypalText size="lg" theme="dark" />
                  <span className="text-sm text-gray-400">Text Only</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Examples */}
        <div className="bg-white rounded-lg p-8 shadow-sm border mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">
            Usage Examples
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-3">React Component Import</h3>
              <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono">
                <div>
                  import StudypalLogo, {"{"} StudypalIcon, StudypalText {"}"}{" "}
                  from './components/StudypalLogo';
                </div>
                <div className="mt-2">
                  {'<StudypalLogo size="lg" theme="light" />'}
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3">SVG Export Function</h3>
              <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono">
                <div>
                  import {"{"} getStudypalLogoSVG {"}"} from
                  './components/StudypalLogo';
                </div>
                <div className="mt-2">
                  const svg = getStudypalLogoSVG('light', 40);
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Download Section */}
        <div className="bg-white rounded-lg p-8 shadow-sm border">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">
            Download Assets
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <button
              onClick={() =>
                downloadSVG(
                  getStudypalLogoSVG("light", 200),
                  "studypal-logo-light.svg",
                )
              }
              className="p-4 border rounded-lg hover:bg-gray-50 transition-colors text-center"
            >
              <div className="text-sm font-medium">Light SVG</div>
              <div className="text-xs text-gray-500 mt-1">200px</div>
            </button>

            <button
              onClick={() =>
                downloadSVG(
                  getStudypalLogoSVG("dark", 200),
                  "studypal-logo-dark.svg",
                )
              }
              className="p-4 border rounded-lg hover:bg-gray-50 transition-colors text-center"
            >
              <div className="text-sm font-medium">Dark SVG</div>
              <div className="text-xs text-gray-500 mt-1">200px</div>
            </button>

            <button
              onClick={() =>
                copyToClipboard(
                  `import StudypalLogo from './components/StudypalLogo';\n\n<StudypalLogo size="lg" theme="light" />`,
                )
              }
              className="p-4 border rounded-lg hover:bg-gray-50 transition-colors text-center"
            >
              <div className="text-sm font-medium">Copy React Code</div>
              <div className="text-xs text-gray-500 mt-1">To clipboard</div>
            </button>

            <button
              onClick={() => copyToClipboard(getStudypalLogoSVG("light", 40))}
              className="p-4 border rounded-lg hover:bg-gray-50 transition-colors text-center"
            >
              <div className="text-sm font-medium">Copy SVG</div>
              <div className="text-xs text-gray-500 mt-1">Raw code</div>
            </button>
          </div>
        </div>

        {/* Technical Specs */}
        <div className="bg-white rounded-lg p-8 shadow-sm border mt-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">
            Technical Specifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-medium mb-2">Colors</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-indigo-600 rounded"></div>
                  <span>Primary: #4F46E5</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-indigo-300 rounded"></div>
                  <span>Light: #A5B4FC</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Formats</h3>
              <div className="space-y-1 text-sm">
                <div>• React Component (.tsx)</div>
                <div>• SVG (scalable vector)</div>
                <div>• Inline SVG string</div>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Variants</h3>
              <div className="space-y-1 text-sm">
                <div>• Full logo (icon + text)</div>
                <div>• Icon only</div>
                <div>• Text only</div>
                <div>• Light & dark themes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoShowcase;
