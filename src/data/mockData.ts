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
  },
  {
    id: 11,
    name: "Georgia Institute of Technology",
    rank: 11,
    country: "United States",
    score: 86.2,
    website: "https://gatech.edu"
  },
  {
    id: 12,
    name: "University of Illinois Urbana-Champaign",
    rank: 12,
    country: "United States",
    score: 85.8,
    website: "https://illinois.edu"
  },
  {
    id: 13,
    name: "University of Michigan",
    rank: 13,
    country: "United States",
    score: 85.3,
    website: "https://umich.edu"
  },
  {
    id: 14,
    name: "Cornell University",
    rank: 14,
    country: "United States",
    score: 84.9,
    website: "https://cornell.edu"
  },
  {
    id: 15,
    name: "University of Texas at Austin",
    rank: 15,
    country: "United States",
    score: 84.5,
    website: "https://utexas.edu"
  },
  {
    id: 16,
    name: "University of California, Los Angeles",
    rank: 16,
    country: "United States",
    score: 84.1,
    website: "https://ucla.edu"
  },
  {
    id: 17,
    name: "University of California, San Diego",
    rank: 17,
    country: "United States",
    score: 83.7,
    website: "https://ucsd.edu"
  },
  {
    id: 18,
    name: "University of Wisconsin-Madison",
    rank: 18,
    country: "United States",
    score: 83.3,
    website: "https://wisc.edu"
  },
  {
    id: 19,
    name: "Purdue University",
    rank: 19,
    country: "United States",
    score: 82.9,
    website: "https://purdue.edu"
  },
  {
    id: 20,
    name: "University of Maryland",
    rank: 20,
    country: "United States",
    score: 82.5,
    website: "https://umd.edu"
  },
  {
    id: 21,
    name: "University of Pennsylvania",
    rank: 21,
    country: "United States",
    score: 82.1,
    website: "https://upenn.edu"
  },
  {
    id: 22,
    name: "Columbia University",
    rank: 22,
    country: "United States",
    score: 81.7,
    website: "https://columbia.edu"
  },
  {
    id: 23,
    name: "Yale University",
    rank: 23,
    country: "United States",
    score: 81.3,
    website: "https://yale.edu"
  },
  {
    id: 24,
    name: "Princeton University",
    rank: 24,
    country: "United States",
    score: 80.9,
    website: "https://princeton.edu"
  },
  {
    id: 25,
    name: "University of Chicago",
    rank: 25,
    country: "United States",
    score: 80.5,
    website: "https://uchicago.edu"
  },
  {
    id: 26,
    name: "Duke University",
    rank: 26,
    country: "United States",
    score: 80.1,
    website: "https://duke.edu"
  },
  {
    id: 27,
    name: "Northwestern University",
    rank: 27,
    country: "United States",
    score: 79.7,
    website: "https://northwestern.edu"
  },
  {
    id: 28,
    name: "University of California, Irvine",
    rank: 28,
    country: "United States",
    score: 79.3,
    website: "https://uci.edu"
  },
  {
    id: 29,
    name: "University of California, Davis",
    rank: 29,
    country: "United States",
    score: 78.9,
    website: "https://ucdavis.edu"
  },
  {
    id: 30,
    name: "University of California, Santa Barbara",
    rank: 30,
    country: "United States",
    score: 78.5,
    website: "https://ucsb.edu"
  },
  {
    id: 31,
    name: "University of British Columbia",
    rank: 31,
    country: "Canada",
    score: 78.1,
    website: "https://ubc.ca"
  },
  {
    id: 32,
    name: "University of Waterloo",
    rank: 32,
    country: "Canada",
    score: 77.7,
    website: "https://uwaterloo.ca"
  },
  {
    id: 33,
    name: "McGill University",
    rank: 33,
    country: "Canada",
    score: 77.3,
    website: "https://mcgill.ca"
  },
  {
    id: 34,
    name: "University of Alberta",
    rank: 34,
    country: "Canada",
    score: 76.9,
    website: "https://ualberta.ca"
  },
  {
    id: 35,
    name: "University of Toronto Mississauga",
    rank: 35,
    country: "Canada",
    score: 76.5,
    website: "https://utm.utoronto.ca"
  },
  {
    id: 36,
    name: "Imperial College London",
    rank: 36,
    country: "United Kingdom",
    score: 76.1,
    website: "https://imperial.ac.uk"
  },
  {
    id: 37,
    name: "University College London",
    rank: 37,
    country: "United Kingdom",
    score: 75.7,
    website: "https://ucl.ac.uk"
  },
  {
    id: 38,
    name: "University of Edinburgh",
    rank: 38,
    country: "United Kingdom",
    score: 75.3,
    website: "https://ed.ac.uk"
  },
  {
    id: 39,
    name: "University of Manchester",
    rank: 39,
    country: "United Kingdom",
    score: 74.9,
    website: "https://manchester.ac.uk"
  },
  {
    id: 40,
    name: "King's College London",
    rank: 40,
    country: "United Kingdom",
    score: 74.5,
    website: "https://kcl.ac.uk"
  },
  {
    id: 41,
    name: "Technical University of Munich",
    rank: 41,
    country: "Germany",
    score: 74.1,
    website: "https://tum.de"
  },
  {
    id: 42,
    name: "RWTH Aachen University",
    rank: 42,
    country: "Germany",
    score: 73.7,
    website: "https://rwth-aachen.de"
  },
  {
    id: 43,
    name: "Karlsruhe Institute of Technology",
    rank: 43,
    country: "Germany",
    score: 73.3,
    website: "https://kit.edu"
  },
  {
    id: 44,
    name: "TU Berlin",
    rank: 44,
    country: "Germany",
    score: 72.9,
    website: "https://tu-berlin.de"
  },
  {
    id: 45,
    name: "TU Darmstadt",
    rank: 45,
    country: "Germany",
    score: 72.5,
    website: "https://tu-darmstadt.de"
  },
  {
    id: 46,
    name: "EPFL",
    rank: 46,
    country: "Switzerland",
    score: 72.1,
    website: "https://epfl.ch"
  },
  {
    id: 47,
    name: "University of Zurich",
    rank: 47,
    country: "Switzerland",
    score: 71.7,
    website: "https://uzh.ch"
  },
  {
    id: 48,
    name: "University of Geneva",
    rank: 48,
    country: "Switzerland",
    score: 71.3,
    website: "https://unige.ch"
  },
  {
    id: 49,
    name: "University of Lausanne",
    rank: 49,
    country: "Switzerland",
    score: 70.9,
    website: "https://unil.ch"
  },
  {
    id: 50,
    name: "University of Basel",
    rank: 50,
    country: "Switzerland",
    score: 70.5,
    website: "https://unibas.ch"
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
  },
  {
    id: 11,
    name: "Salesforce",
    prestigeScore: 82,
    rank: 11,
    industry: "Technology / SaaS",
    location: "San Francisco, CA",
    website: "https://salesforce.com"
  },
  {
    id: 12,
    name: "Adobe",
    prestigeScore: 81,
    rank: 12,
    industry: "Technology / Software",
    location: "San Jose, CA",
    website: "https://adobe.com"
  },
  {
    id: 13,
    name: "Oracle",
    prestigeScore: 80,
    rank: 13,
    industry: "Technology / Database",
    location: "Austin, TX",
    website: "https://oracle.com"
  },
  {
    id: 14,
    name: "Intel",
    prestigeScore: 79,
    rank: 14,
    industry: "Technology / Hardware",
    location: "Santa Clara, CA",
    website: "https://intel.com"
  },
  {
    id: 15,
    name: "AMD",
    prestigeScore: 78,
    rank: 15,
    industry: "Technology / Hardware",
    location: "Santa Clara, CA",
    website: "https://amd.com"
  },
  {
    id: 16,
    name: "Cisco",
    prestigeScore: 77,
    rank: 16,
    industry: "Technology / Networking",
    location: "San Jose, CA",
    website: "https://cisco.com"
  },
  {
    id: 17,
    name: "IBM",
    prestigeScore: 76,
    rank: 17,
    industry: "Technology / Consulting",
    location: "Armonk, NY",
    website: "https://ibm.com"
  },
  {
    id: 18,
    name: "Palantir",
    prestigeScore: 75,
    rank: 18,
    industry: "Technology / Data Analytics",
    location: "Denver, CO",
    website: "https://palantir.com"
  },
  {
    id: 19,
    name: "Databricks",
    prestigeScore: 74,
    rank: 19,
    industry: "Technology / Data",
    location: "San Francisco, CA",
    website: "https://databricks.com"
  },
  {
    id: 20,
    name: "Snowflake",
    prestigeScore: 73,
    rank: 20,
    industry: "Technology / Cloud Data",
    location: "Bozeman, MT",
    website: "https://snowflake.com"
  },
  {
    id: 21,
    name: "MongoDB",
    prestigeScore: 72,
    rank: 21,
    industry: "Technology / Database",
    location: "New York, NY",
    website: "https://mongodb.com"
  },
  {
    id: 22,
    name: "Atlassian",
    prestigeScore: 71,
    rank: 22,
    industry: "Technology / Software",
    location: "Sydney, Australia",
    website: "https://atlassian.com"
  },
  {
    id: 23,
    name: "Slack",
    prestigeScore: 70,
    rank: 23,
    industry: "Technology / Communication",
    location: "San Francisco, CA",
    website: "https://slack.com"
  },
  {
    id: 24,
    name: "Zoom",
    prestigeScore: 69,
    rank: 24,
    industry: "Technology / Communication",
    location: "San Jose, CA",
    website: "https://zoom.us"
  },
  {
    id: 25,
    name: "Dropbox",
    prestigeScore: 68,
    rank: 25,
    industry: "Technology / Cloud Storage",
    location: "San Francisco, CA",
    website: "https://dropbox.com"
  },
  {
    id: 26,
    name: "Airbnb",
    prestigeScore: 67,
    rank: 26,
    industry: "Technology / Travel",
    location: "San Francisco, CA",
    website: "https://airbnb.com"
  },
  {
    id: 27,
    name: "Uber",
    prestigeScore: 66,
    rank: 27,
    industry: "Technology / Transportation",
    location: "San Francisco, CA",
    website: "https://uber.com"
  },
  {
    id: 28,
    name: "Lyft",
    prestigeScore: 65,
    rank: 28,
    industry: "Technology / Transportation",
    location: "San Francisco, CA",
    website: "https://lyft.com"
  },
  {
    id: 29,
    name: "DoorDash",
    prestigeScore: 64,
    rank: 29,
    industry: "Technology / Food Delivery",
    location: "San Francisco, CA",
    website: "https://doordash.com"
  },
  {
    id: 30,
    name: "Instacart",
    prestigeScore: 63,
    rank: 30,
    industry: "Technology / Grocery Delivery",
    location: "San Francisco, CA",
    website: "https://instacart.com"
  },
  {
    id: 31,
    name: "Spotify",
    prestigeScore: 62,
    rank: 31,
    industry: "Technology / Entertainment",
    location: "Stockholm, Sweden",
    website: "https://spotify.com"
  },
  {
    id: 32,
    name: "Discord",
    prestigeScore: 61,
    rank: 32,
    industry: "Technology / Communication",
    location: "San Francisco, CA",
    website: "https://discord.com"
  },
  {
    id: 33,
    name: "Reddit",
    prestigeScore: 60,
    rank: 33,
    industry: "Technology / Social Media",
    location: "San Francisco, CA",
    website: "https://reddit.com"
  },
  {
    id: 34,
    name: "Pinterest",
    prestigeScore: 59,
    rank: 34,
    industry: "Technology / Social Media",
    location: "San Francisco, CA",
    website: "https://pinterest.com"
  },
  {
    id: 35,
    name: "Snap Inc.",
    prestigeScore: 58,
    rank: 35,
    industry: "Technology / Social Media",
    location: "Santa Monica, CA",
    website: "https://snap.com"
  },
  {
    id: 36,
    name: "Twitter",
    prestigeScore: 57,
    rank: 36,
    industry: "Technology / Social Media",
    location: "San Francisco, CA",
    website: "https://twitter.com"
  },
  {
    id: 37,
    name: "LinkedIn",
    prestigeScore: 56,
    rank: 37,
    industry: "Technology / Professional Network",
    location: "Sunnyvale, CA",
    website: "https://linkedin.com"
  },
  {
    id: 38,
    name: "GitHub",
    prestigeScore: 55,
    rank: 38,
    industry: "Technology / Developer Platform",
    location: "San Francisco, CA",
    website: "https://github.com"
  },
  {
    id: 39,
    name: "GitLab",
    prestigeScore: 54,
    rank: 39,
    industry: "Technology / Developer Platform",
    location: "San Francisco, CA",
    website: "https://gitlab.com"
  },
  {
    id: 40,
    name: "Notion",
    prestigeScore: 53,
    rank: 40,
    industry: "Technology / Productivity",
    location: "San Francisco, CA",
    website: "https://notion.so"
  },
  {
    id: 41,
    name: "Figma",
    prestigeScore: 52,
    rank: 41,
    industry: "Technology / Design",
    location: "San Francisco, CA",
    website: "https://figma.com"
  },
  {
    id: 42,
    name: "Canva",
    prestigeScore: 51,
    rank: 42,
    industry: "Technology / Design",
    location: "Sydney, Australia",
    website: "https://canva.com"
  },
  {
    id: 43,
    name: "Shopify",
    prestigeScore: 50,
    rank: 43,
    industry: "Technology / E-commerce",
    location: "Ottawa, Canada",
    website: "https://shopify.com"
  },
  {
    id: 44,
    name: "Square",
    prestigeScore: 49,
    rank: 44,
    industry: "Technology / Fintech",
    location: "San Francisco, CA",
    website: "https://square.com"
  },
  {
    id: 45,
    name: "Coinbase",
    prestigeScore: 48,
    rank: 45,
    industry: "Technology / Cryptocurrency",
    location: "San Francisco, CA",
    website: "https://coinbase.com"
  },
  {
    id: 46,
    name: "Robinhood",
    prestigeScore: 47,
    rank: 46,
    industry: "Technology / Fintech",
    location: "Menlo Park, CA",
    website: "https://robinhood.com"
  },
  {
    id: 47,
    name: "Chime",
    prestigeScore: 46,
    rank: 47,
    industry: "Technology / Fintech",
    location: "San Francisco, CA",
    website: "https://chime.com"
  },
  {
    id: 48,
    name: "Affirm",
    prestigeScore: 45,
    rank: 48,
    industry: "Technology / Fintech",
    location: "San Francisco, CA",
    website: "https://affirm.com"
  },
  {
    id: 49,
    name: "Klarna",
    prestigeScore: 44,
    rank: 49,
    industry: "Technology / Fintech",
    location: "Stockholm, Sweden",
    website: "https://klarna.com"
  },
  {
    id: 50,
    name: "Plaid",
    prestigeScore: 43,
    rank: 50,
    industry: "Technology / Fintech",
    location: "San Francisco, CA",
    website: "https://plaid.com"
  }
];

export const companyList = ["Google", "Amazon", "Meta", "Apple", "Microsoft", "Netflix", "Tesla", "OpenAI", "Nvidia", "Stripe", "Salesforce", "Adobe", "Oracle", "Intel", "AMD", "Cisco", "IBM", "Palantir", "Databricks", "Snowflake", "MongoDB", "Atlassian", "Slack", "Zoom", "Dropbox", "Airbnb", "Uber", "Lyft", "DoorDash", "Instacart", "Spotify", "Discord", "Reddit", "Pinterest", "Snap Inc.", "Twitter", "LinkedIn", "GitHub", "GitLab", "Notion", "Figma", "Canva", "Shopify", "Square", "Coinbase", "Robinhood", "Chime", "Affirm", "Klarna", "Plaid"];