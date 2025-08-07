import React from "react";
import BoomerangLogo, {
  BoomerangIcon,
  BoomerangText,
  getBoomerangLogoSVG,
  getBoomerangImageURL,
} from "../components/BoomerangLogo";

const BoomerangShowcase: React.FC = () => {
  const downloadImage = async (imageUrl: string, filename: string) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-orange-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Boomerang.study Logo Assets
          </h1>
          <p className="text-lg text-gray-600">
            Knowledge that comes back to you - Developer-ready logo components
            and assets
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
                  <BoomerangLogo size="xl" theme="light" />
                  <span className="text-sm text-gray-500">Full Logo - XL</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <BoomerangLogo size="lg" theme="light" />
                  <span className="text-sm text-gray-500">
                    Full Logo - Large
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <BoomerangLogo size="md" theme="light" />
                  <span className="text-sm text-gray-500">
                    Full Logo - Medium
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <BoomerangIcon size="lg" theme="light" />
                  <span className="text-sm text-gray-500">Icon Only</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <BoomerangText size="lg" theme="light" />
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
                  <BoomerangLogo size="xl" theme="dark" />
                  <span className="text-sm text-gray-400">Full Logo - XL</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-700 rounded-lg">
                <div className="flex items-center space-x-4">
                  <BoomerangLogo size="lg" theme="dark" />
                  <span className="text-sm text-gray-400">
                    Full Logo - Large
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-700 rounded-lg">
                <div className="flex items-center space-x-4">
                  <BoomerangLogo size="md" theme="dark" />
                  <span className="text-sm text-gray-400">
                    Full Logo - Medium
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-700 rounded-lg">
                <div className="flex items-center space-x-4">
                  <BoomerangIcon size="lg" theme="dark" />
                  <span className="text-sm text-gray-400">Icon Only</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-700 rounded-lg">
                <div className="flex items-center space-x-4">
                  <BoomerangText size="lg" theme="dark" />
                  <span className="text-sm text-gray-400">Text Only</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logo Concept */}
        <div className="bg-white rounded-lg p-8 shadow-sm border mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">
            Design Concept
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-medium mb-3 text-sky-600">
                The Boomerang Metaphor
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                The boomerang represents the cyclical nature of learning -
                knowledge and skills that come back to you when you need them
                most. Just like a boomerang returns to its thrower, the
                knowledge you gain through study returns to help you succeed.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-3 text-orange-600">
                Visual Elements
              </h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Curved boomerang shape suggesting movement and return</li>
                <li>
                  • Central study element (book icon) representing knowledge
                </li>
                <li>• Motion lines indicating the dynamic learning process</li>
                <li>• Sky blue and orange color scheme for energy and trust</li>
              </ul>
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
                  import BoomerangLogo, {"{"} BoomerangIcon, BoomerangText {"}"}{" "}
                  from './components/BoomerangLogo';
                </div>
                <div className="mt-2">
                  {'<BoomerangLogo size="lg" theme="light" />'}
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3">SVG Export Function</h3>
              <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono">
                <div>
                  import {"{"} getBoomerangLogoSVG {"}"} from
                  './components/BoomerangLogo';
                </div>
                <div className="mt-2">
                  const svg = getBoomerangLogoSVG('light', 40);
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
                downloadImage(
                  getBoomerangImageURL(),
                  "boomerang-study-logo.webp",
                )
              }
              className="p-4 border rounded-lg hover:bg-gray-50 transition-colors text-center"
            >
              <div className="text-sm font-medium">Boomerang Image</div>
              <div className="text-xs text-gray-500 mt-1">WebP format</div>
            </button>

            <button
              onClick={() =>
                downloadImage(
                  getBoomerangImageURL(),
                  "boomerang-study-logo-large.webp",
                )
              }
              className="p-4 border rounded-lg hover:bg-gray-50 transition-colors text-center"
            >
              <div className="text-sm font-medium">Large Image</div>
              <div className="text-xs text-gray-500 mt-1">800px width</div>
            </button>

            <button
              onClick={() =>
                copyToClipboard(
                  `import BoomerangLogo from './components/BoomerangLogo';\n\n<BoomerangLogo size="lg" theme="light" />`,
                )
              }
              className="p-4 border rounded-lg hover:bg-gray-50 transition-colors text-center"
            >
              <div className="text-sm font-medium">Copy React Code</div>
              <div className="text-xs text-gray-500 mt-1">To clipboard</div>
            </button>

            <button
              onClick={() => copyToClipboard(getBoomerangImageURL())}
              className="p-4 border rounded-lg hover:bg-gray-50 transition-colors text-center"
            >
              <div className="text-sm font-medium">Copy Image URL</div>
              <div className="text-xs text-gray-500 mt-1">Direct link</div>
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
                  <div className="w-4 h-4 bg-sky-500 rounded"></div>
                  <span>Primary: #0EA5E9</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-orange-500 rounded"></div>
                  <span>Accent: #F97316</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-sky-300 rounded"></div>
                  <span>Light: #7DD3FC</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Formats</h3>
              <div className="space-y-1 text-sm">
                <div>• React Component (.tsx)</div>
                <div>• WebP Image (high quality)</div>
                <div>• Direct image URL</div>
                <div>• CSS filter transformations</div>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Variants</h3>
              <div className="space-y-1 text-sm">
                <div>• Full logo (icon + text)</div>
                <div>• Icon only (boomerang)</div>
                <div>• Text only (Boomerang.study)</div>
                <div>• Light & dark themes</div>
                <div>• Multiple sizes (sm to xl)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoomerangShowcase;
