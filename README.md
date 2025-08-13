# Animated Callout - Power BI Custom Visual

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![PowerBI](https://img.shields.io/badge/PowerBI-Custom%20Visual-yellow.svg)](https://powerbi.microsoft.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.x-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green.svg)](https://nodejs.org)

A modern, highly customizable callout visual for Power BI with stunning animated borders and flexible styling options. Perfect for creating attention-grabbing headers, banners, KPI highlights, and dynamic callouts in your Power BI reports.

![Visual Preview](assets/icon.png)

## 🎥 Demo

> **Try it live!** Download the latest `.pbiviz` file from [Releases](https://github.com/ttaahhaa/powerbi_animated_custom_visual/releases) and import it into Power BI Desktop to see all animations in action.

## ✨ Features

### 🎨 **Rich Border Animations**

- **Solid** - Clean, static borders
- **Shimmer** - Smooth opacity pulsing effect
- **Marquee** - Moving dashed lines
- **Glow** - Animated glowing effects
- **Pulse** - Dynamic border thickness animation
- **Wave** - Floating, organic wave motion
- **Neon** - Multi-layered cyberpunk-style glow
- **Breathing** - Gentle scaling and opacity animation
- **Snake** - Continuous line traveling around the perimeter

### 🎛️ **Advanced Animation Controls**

- **Speed Control** - From 0.1 (ultra-slow) to 10+ (high-energy)
- **Direction** - Forward, Backward, or Alternating patterns
- **Intensity Settings** - Customize pulse depth, glow brightness, wave amplitude
- **Custom Timing** - Sub-second precision for smooth, professional animations

### 🌈 **Flexible Background Options**

- **Gradient Backgrounds** - Linear gradients with customizable colors and angles
- **Solid Colors** - Simple, clean backgrounds
- **Real-time Preview** - See changes instantly as you adjust settings

### 📝 **Typography Controls**

- **Custom Text** - Any text content you want to display
- **Font Options** - Font family, size, weight, and color
- **Professional Fonts** - Optimized for business presentations

### 🔧 **Responsive Design**

- **Auto-scaling** - Works perfectly at any size
- **Corner Radius** - Fully customizable rounded corners
- **Border Thickness** - From subtle 1px to bold 10px+ borders
- **RTL Support** - Full Arabic and right-to-left language support

## 🚀 Quick Start

### Installation for End Users

1. **Download**: Get the latest `.pbiviz` file from [GitHub Releases](https://github.com/ttaahhaa/powerbi_animated_custom_visual/releases)
2. **Open Power BI Desktop**
3. **Import Visual**:
   - Go to **Home** → **Get Data** → **More** → **Other** → **Power BI Visuals**
   - Click **Import a visual from a file**
   - Select the downloaded `.pbiviz` file
4. **Ready to Use**: The visual will appear in your visualizations panel with a custom icon

### Basic Usage

1. Add the visual to your report canvas
2. In the **Format** panel, you'll see three main sections:
   - **Text** - Configure your message and typography
   - **Border** - Choose animation style and customize effects
   - **Background** - Set colors and gradients

## 📖 Detailed Configuration Guide

### Text Settings

| Property        | Description                 | Default            |
| --------------- | --------------------------- | ------------------ |
| **Custom text** | The message to display      | "Animated Callout" |
| **Font family** | Choose from available fonts | "Segoe UI"         |
| **Font size**   | Text size in pixels         | 36                 |
| **Font weight** | Light to Black (300-900)    | Bold (700)         |
| **Text color**  | Color picker for text       | White (#FFFFFF)    |

### Border Settings

| Property                | Description            | Range                      | Default         |
| ----------------------- | ---------------------- | -------------------------- | --------------- |
| **Border style**        | Animation type         | 9 options                  | Shimmer         |
| **Thickness**           | Border width in pixels | 1-20+                      | 3               |
| **Corner radius**       | Rounded corner size    | 0-50+                      | 16              |
| **Base color**          | Border color           | Color picker               | Green (#27F59E) |
| **Animation speed**     | Animation frequency    | 0.1-10+                    | 1.0             |
| **Animation direction** | Movement pattern       | Forward/Backward/Alternate | Forward         |
| **Pulse intensity**     | Effect strength        | 0.1-1.0                    | 0.7             |
| **Glow intensity**      | Glow brightness        | 1-20                       | 5               |
| **Wave amplitude**      | Wave movement range    | 1-10                       | 3               |
| **Snake length**        | Snake segment size     | 10-100                     | 30              |
| **Dash length**         | Marquee dash size      | 5-50                       | 20              |
| **Gap length**          | Marquee gap size       | 5-30                       | 10              |

### Background Settings

| Property             | Description                  | Default             |
| -------------------- | ---------------------------- | ------------------- |
| **Background type**  | Gradient or Solid            | Gradient            |
| **Gradient angle**   | Direction in degrees (0-360) | 45°                 |
| **Gradient color 1** | First gradient color         | Dark Blue (#1e3a8a) |
| **Gradient color 2** | Second gradient color        | Green (#059669)     |
| **Solid color**      | Single background color      | Dark Blue (#1e3a8a) |

## 🎨 Design Examples

### Professional Business

```
Text: "Q4 Revenue Goal: $2.5M"
Border: Solid, 2px, Navy Blue
Background: Gradient (White → Light Gray)
```

### Attention-Grabbing Alert

```
Text: "⚠️ Action Required"
Border: Pulse, 4px, Red, Speed: 2.0
Background: Solid Red with low opacity
```

### Modern Tech Style

```
Text: "AI Analytics Dashboard"
Border: Neon, 3px, Cyan, Glow: 15
Background: Gradient (Dark Blue → Black)
```

### Elegant Highlight

```
Text: "Key Insight"
Border: Shimmer, 2px, Gold, Speed: 0.5
Background: Gradient (Cream → Light Gold)
```

## 🛠️ Development Setup

### Prerequisites

- **Node.js** LTS version (18+)
- **PowerBI Visuals CLI**: `npm install -g powerbi-visuals-tools`
- **Git** for version control

### Building from Source

```bash
# Clone the repository
git clone https://github.com/ttaahhaa/powerbi_animated_custom_visual.git
cd powerbi_animated_custom_visual

# Install dependencies
npm install

# Start development server with hot reload
pbiviz start

# Build production package
npm run build
```

### Development Workflow

1. Run `pbiviz start` for live development
2. Open Power BI Desktop
3. Import visual from https://localhost:8080/assets/status
4. Make changes to TypeScript files
5. Visual updates automatically in Power BI

### Project Structure

```
powerbi_animated_custom_visual/
├── src/
│   ├── visual-minimal.ts      # Main visual logic
│   ├── settings-simple.ts     # Configuration settings
│   ├── utils/
│   │   ├── animation.ts       # Animation utilities
│   │   └── rtl.ts            # RTL text support
│   └── styles/
│       └── visual.less        # Styling
├── capabilities.json          # Visual capabilities & properties
├── pbiviz.json               # Visual manifest
├── assets/                   # Icons and images
├── stringResources/          # Localization files
│   ├── en-US/
│   └── ar-SA/               # Arabic support
├── test/                     # Unit tests
└── dist/                     # Built visual package
```

## 🔧 Customization Tips

### Performance Optimization

- Use **Animation Speed** < 1.0 for smooth, professional effects
- **Snake Length** 20-40 works best for most visual sizes
- Avoid very high **Glow Intensity** (>15) on slower devices

### Design Best Practices

- **High Contrast**: Ensure text is readable against background
- **Consistent Branding**: Use your organization's color palette
- **Animation Restraint**: Subtle animations (Speed: 0.5-1.5) for professional reports
- **Size Considerations**: Test your visual at different report sizes

### Accessibility

- Choose colors that meet WCAG contrast requirements
- Avoid animations that might trigger seizures (high frequency/intensity)
- Test with screen readers for text accessibility

## 🌍 Localization Support

The visual supports multiple languages and RTL (Right-to-Left) text layouts:

- English (en-US)
- Arabic (ar-SA)
- Additional languages can be added in `stringResources/`

## 📄 License

This project is licensed under the Apache 2.0 License - see the [LICENSE](https://github.com/ttaahhaa/powerbi_animated_custom_visual/blob/main/LICENSE) file for details.

## ⭐ Show Your Support

If this visual helps you create amazing Power BI reports, please consider:

- ⭐ **Starring** this repository
- 🐛 **Reporting issues** you encounter
- 💡 **Suggesting new features**
- 🤝 **Contributing** improvements
- 📢 **Sharing** with your Power BI community

## 🔗 Links

- **Repository**: [https://github.com/ttaahhaa/powerbi_animated_custom_visual](https://github.com/ttaahhaa/powerbi_animated_custom_visual)
- **Issues**: [https://github.com/ttaahhaa/powerbi_animated_custom_visual/issues](https://github.com/ttaahhaa/powerbi_animated_custom_visual/issues)
- **Discussions**: [https://github.com/ttaahhaa/powerbi_animated_custom_visual/discussions](https://github.com/ttaahhaa/powerbi_animated_custom_visual/discussions)
- **Releases**: [https://github.com/ttaahhaa/powerbi_animated_custom_visual/releases](https://github.com/ttaahhaa/powerbi_animated_custom_visual/releases)

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Quick Contribution

1. **Fork** the [repository](https://github.com/ttaahhaa/powerbi_animated_custom_visual)
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a [Pull Request](https://github.com/ttaahhaa/powerbi_animated_custom_visual/pulls)

### Development Guidelines

- Follow TypeScript best practices
- Test your changes in Power BI Desktop
- Update documentation for new features
- Maintain backward compatibility
- Add unit tests when applicable

### Areas Where We Need Help

- 🎨 New animation styles
- 🌍 Additional language support
- 📱 Mobile responsiveness improvements
- 🎭 Accessibility enhancements
- 📝 Documentation improvements

## 📞 Support

For issues, feature requests, or questions:

- 🐛 **Bug Reports**: [Create an issue](https://github.com/ttaahhaa/powerbi_animated_custom_visual/issues/new) on GitHub
- 💡 **Feature Requests**: [Open a discussion](https://github.com/ttaahhaa/powerbi_animated_custom_visual/discussions)
- 📚 **Documentation**: Check this README and [Power BI Custom Visuals docs](https://docs.microsoft.com/en-us/power-bi/developer/visuals/)
- 🤝 **Community**: Join the discussion in [GitHub Discussions](https://github.com/ttaahhaa/powerbi_animated_custom_visual/discussions)

## 🔄 Version History

### v1.0.0 - Initial Release

- ✨ **9 Border Animation Styles**: Solid, Shimmer, Marquee, Glow, Pulse, Wave, Neon, Breathing, Snake
- 🎨 **Flexible Backgrounds**: Gradient and solid color support with customizable angles
- 📝 **Typography Controls**: Font family, size, weight, and color customization
- 🌍 **Internationalization**: Full RTL support for Arabic and other right-to-left languages
- 📱 **Responsive Design**: Auto-scaling and adaptive layouts for all screen sizes
- ⚡ **Performance Optimized**: Smooth animations with configurable speed (0.1-10+ range)
- 🎛️ **Advanced Controls**: 15+ customizable properties for fine-tuning animations
- ♿ **Accessibility**: WCAG-compliant color options and screen reader support

---

**Made with ❤️ for the Power BI Community**

_Transform your reports with stunning animated callouts that capture attention and convey information beautifully._
