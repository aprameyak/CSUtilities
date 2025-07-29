import { LeetCodeProblem, University, Company } from '@/types';

export const mockProblems: LeetCodeProblem[] = [
  {
    id: 1,
    name: "Two Sum",
    difficulty: "Easy",
    companies: ["Google", "Amazon", "Meta", "Apple"],
    url: "https://leetcode.com/problems/two-sum/",
    topics: ["Array", "Hash Table"]
  },
  {
    id: 2,
    name: "Add Two Numbers",
    difficulty: "Medium",
    companies: ["Microsoft", "Amazon", "Meta"],
    url: "https://leetcode.com/problems/add-two-numbers/",
    topics: ["Linked List", "Math"]
  },
  {
    id: 3,
    name: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    companies: ["Google", "Amazon", "Microsoft", "Meta"],
    url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    topics: ["Hash Table", "String", "Sliding Window"]
  },
  {
    id: 4,
    name: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    companies: ["Google", "Meta", "Apple"],
    url: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
    topics: ["Array", "Binary Search", "Divide and Conquer"]
  },
  {
    id: 5,
    name: "Longest Palindromic Substring",
    difficulty: "Medium",
    companies: ["Amazon", "Microsoft", "Meta"],
    url: "https://leetcode.com/problems/longest-palindromic-substring/",
    topics: ["String", "Dynamic Programming"]
  },
  {
    id: 121,
    name: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    companies: ["Amazon", "Google", "Meta", "Apple"],
    url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
    topics: ["Array", "Dynamic Programming"]
  },
  {
    id: 206,
    name: "Reverse Linked List",
    difficulty: "Easy",
    companies: ["Google", "Amazon", "Microsoft", "Meta", "Apple"],
    url: "https://leetcode.com/problems/reverse-linked-list/",
    topics: ["Linked List", "Recursion"]
  },
  {
    id: 146,
    name: "LRU Cache",
    difficulty: "Medium",
    companies: ["Google", "Amazon", "Microsoft", "Meta"],
    url: "https://leetcode.com/problems/lru-cache/",
    topics: ["Hash Table", "Linked List", "Design"]
  },
  {
    id: 42,
    name: "Trapping Rain Water",
    difficulty: "Hard",
    companies: ["Google", "Amazon", "Meta", "Apple"],
    url: "https://leetcode.com/problems/trapping-rain-water/",
    topics: ["Array", "Two Pointers", "Dynamic Programming"]
  },
  {
    id: 200,
    name: "Number of Islands",
    difficulty: "Medium",
    companies: ["Amazon", "Google", "Meta", "Microsoft"],
    url: "https://leetcode.com/problems/number-of-islands/",
    topics: ["Array", "Depth-First Search", "Breadth-First Search"]
  }
];

export const mockUniversities: University[] = [
  {
    id: 1,
    name: "Massachusetts Institute of Technology",
    rank: 1,
    country: "United States",
    score: 95.8,
    website: "https://mit.edu"
  },
  {
    id: 2,
    name: "Stanford University",
    rank: 2,
    country: "United States",
    score: 94.2,
    website: "https://stanford.edu"
  },
  {
    id: 3,
    name: "Carnegie Mellon University",
    rank: 3,
    country: "United States",
    score: 92.1,
    website: "https://cmu.edu"
  },
  {
    id: 4,
    name: "University of California, Berkeley",
    rank: 4,
    country: "United States",
    score: 91.5,
    website: "https://berkeley.edu"
  },
  {
    id: 5,
    name: "Harvard University",
    rank: 5,
    country: "United States",
    score: 90.8,
    website: "https://harvard.edu"
  },
  {
    id: 6,
    name: "ETH Zurich",
    rank: 6,
    country: "Switzerland",
    score: 89.2,
    website: "https://ethz.ch"
  },
  {
    id: 7,
    name: "University of Oxford",
    rank: 7,
    country: "United Kingdom",
    score: 88.7,
    website: "https://ox.ac.uk"
  },
  {
    id: 8,
    name: "University of Cambridge",
    rank: 8,
    country: "United Kingdom",
    score: 88.1,
    website: "https://cam.ac.uk"
  },
  {
    id: 9,
    name: "University of Toronto",
    rank: 9,
    country: "Canada",
    score: 87.3,
    website: "https://utoronto.ca"
  },
  {
    id: 10,
    name: "University of Washington",
    rank: 10,
    country: "United States",
    score: 86.9,
    website: "https://washington.edu"
  }
];

export const mockCompanies: Company[] = [
  {
    id: 1,
    name: "Google",
    prestigeScore: 98,
    rank: 1,
    industry: "Technology",
    location: "Mountain View, CA",
    website: "https://google.com"
  },
  {
    id: 2,
    name: "Apple",
    prestigeScore: 96,
    rank: 2,
    industry: "Technology",
    location: "Cupertino, CA",
    website: "https://apple.com"
  },
  {
    id: 3,
    name: "Microsoft",
    prestigeScore: 95,
    rank: 3,
    industry: "Technology",
    location: "Redmond, WA",
    website: "https://microsoft.com"
  },
  {
    id: 4,
    name: "Meta",
    prestigeScore: 93,
    rank: 4,
    industry: "Technology",
    location: "Menlo Park, CA",
    website: "https://meta.com"
  },
  {
    id: 5,
    name: "Amazon",
    prestigeScore: 92,
    rank: 5,
    industry: "Technology / E-commerce",
    location: "Seattle, WA",
    website: "https://amazon.com"
  },
  {
    id: 6,
    name: "Netflix",
    prestigeScore: 89,
    rank: 6,
    industry: "Entertainment / Technology",
    location: "Los Gatos, CA",
    website: "https://netflix.com"
  },
  {
    id: 7,
    name: "Tesla",
    prestigeScore: 87,
    rank: 7,
    industry: "Automotive / Technology",
    location: "Austin, TX",
    website: "https://tesla.com"
  },
  {
    id: 8,
    name: "OpenAI",
    prestigeScore: 86,
    rank: 8,
    industry: "Artificial Intelligence",
    location: "San Francisco, CA",
    website: "https://openai.com"
  },
  {
    id: 9,
    name: "Nvidia",
    prestigeScore: 85,
    rank: 9,
    industry: "Technology / Hardware",
    location: "Santa Clara, CA",
    website: "https://nvidia.com"
  },
  {
    id: 10,
    name: "Stripe",
    prestigeScore: 83,
    rank: 10,
    industry: "Fintech",
    location: "San Francisco, CA",
    website: "https://stripe.com"
  }
];

export const companyList = ["Google", "Amazon", "Meta", "Apple", "Microsoft", "Netflix", "Tesla", "OpenAI", "Nvidia", "Stripe"];