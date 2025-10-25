# CSUtilities - Computer Science Learning Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

A comprehensive platform for Computer Science students and professionals to practice Data Structures & Algorithms, explore university rankings, and research tech company prestige.

## Features

### DSA Practice Hub
- **Curated LeetCode Problems**: Hand-picked problems organized by difficulty and company tags
- **Smart Filtering**: Search by problem name, topics, or filter by difficulty and company
- **Direct Integration**: One-click access to LeetCode problems
- **Company Tagging**: See which companies frequently ask specific problems

### University Rankings
- **Top CS Universities**: Comprehensive rankings based on CSRankings data
- **Global Coverage**: Universities from around the world
- **Detailed Profiles**: Scores, locations, and direct website links
- **Country Filtering**: Filter universities by country

### Company Rankings
- **Tech Company Prestige**: Ranked by desirability and prestige scores
- **Industry Categorization**: Filter by industry (Technology, Software, Fintech, etc.)
- **Problem Integration**: See how many LeetCode problems each company uses
- **Location Data**: Company headquarters and office locations

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Routing**: React Router DOM
- **State Management**: React Query
- **Icons**: Lucide React


## Key Features

### DSA Practice
- **Curated Problems**: Classic LeetCode problems with company tags
- **Difficulty Levels**: Easy, Medium, Hard with color coding
- **Topic Tags**: Array, Hash Table, Dynamic Programming, etc.
- **Company Integration**: See which companies ask each problem

### University Rankings
- **Top Universities**: MIT, Stanford, CMU, Berkeley, Harvard, etc.
- **Global Rankings**: US, UK, Switzerland, Canada
- **Score System**: 0-100 prestige scores
- **Direct Links**: Visit university websites

### Company Rankings
- **Tech Giants**: Google, Apple, Microsoft, Meta, Amazon
- **Emerging Companies**: Tesla, Stripe, Nvidia, Palantir
- **Prestige Scores**: 83-98 range with visual indicators
- **Problem Count**: Shows LeetCode problems per company

## Development

### Adding New Problems
1. Edit `src/data/mockData.ts`
2. Add new problem to `mockProblems` array
3. Include company tags and difficulty level
4. Add relevant topics

### Adding Universities
1. Add university data to `mockUniversities` array
2. Include rank, country, score, and website
3. Ensure proper ranking order

### Adding Companies
1. Add company data to `mockCompanies` array
2. Include prestige score, industry, and location
3. Link to existing LeetCode problems

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Quick Contribution Guide
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **LeetCode** for problem content and structure
- **CSRankings** for university ranking data
- **shadcn/ui** for the excellent component library
- **Vite** for the fast build tool
- **Tailwind CSS** for the utility-first CSS framework

## Support

- **Issues**: [GitHub Issues](https://github.com/aprameyak/CSUtilities/issues)
- **Discussions**: [GitHub Discussions](https://github.com/aprameyak/CSUtilities/discussions)

## Roadmap

- [ ] **Real API Integration**: Replace mock data with live APIs
- [ ] **User Authentication**: Login/signup functionality
- [ ] **Progress Tracking**: Track DSA problem completion
- [ ] **Advanced Analytics**: Charts and statistics
- [ ] **Dark Mode**: Theme switching
- [ ] **Mobile App**: React Native version
- [ ] **Problem Solutions**: Add solution explanations
- [ ] **Interview Prep**: Mock interview features

