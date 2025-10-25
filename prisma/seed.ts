import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seed...')

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 12)
  const adminUser = await prisma.adminUser.upsert({
    where: { username: 'admin' },
    update: {},
    create: {
      username: 'admin',
      email: 'admin@csutilities.com',
      password: hashedPassword,
      role: 'SUPER_ADMIN',
      status: 'ACTIVE'
    }
  })

  console.log('✅ Admin user created:', adminUser.username)

  // Seed DSA Problems
  const problems = [
    {
      name: "Two Sum",
      difficulty: "EASY" as const,
      description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
      topics: ["Array", "Hash Table"],
      companyTags: ["Google", "Amazon", "Meta", "Apple"],
      leetcodeUrl: "https://leetcode.com/problems/two-sum/",
      status: "ACTIVE" as const,
      featured: true
    },
    {
      name: "Add Two Numbers",
      difficulty: "MEDIUM" as const,
      description: "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit.",
      topics: ["Linked List", "Math"],
      companyTags: ["Microsoft", "Amazon", "Meta"],
      leetcodeUrl: "https://leetcode.com/problems/add-two-numbers/",
      status: "ACTIVE" as const,
      featured: true
    },
    {
      name: "Longest Substring Without Repeating Characters",
      difficulty: "MEDIUM" as const,
      description: "Given a string s, find the length of the longest substring without repeating characters.",
      topics: ["Hash Table", "String", "Sliding Window"],
      companyTags: ["Google", "Amazon", "Microsoft", "Meta"],
      leetcodeUrl: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
      status: "ACTIVE" as const,
      featured: true
    },
    {
      name: "Median of Two Sorted Arrays",
      difficulty: "HARD" as const,
      description: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
      topics: ["Array", "Binary Search", "Divide and Conquer"],
      companyTags: ["Google", "Meta", "Apple"],
      leetcodeUrl: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
      status: "ACTIVE" as const,
      featured: false
    },
    {
      name: "Longest Palindromic Substring",
      difficulty: "MEDIUM" as const,
      description: "Given a string s, return the longest palindromic substring in s.",
      topics: ["String", "Dynamic Programming"],
      companyTags: ["Amazon", "Microsoft", "Meta"],
      leetcodeUrl: "https://leetcode.com/problems/longest-palindromic-substring/",
      status: "ACTIVE" as const,
      featured: false
    }
  ]

  for (const problem of problems) {
    await prisma.dSAProblem.create({
      data: {
        ...problem,
        createdById: adminUser.id
      }
    })
  }

  console.log('✅ DSA Problems seeded')

  // Seed Universities
  const universities = [
    {
      name: "Massachusetts Institute of Technology",
      rank: 1,
      country: "United States",
      prestigeScore: 95,
      websiteUrl: "https://mit.edu",
      location: "Cambridge, MA",
      description: "World-renowned institution for computer science and technology",
      status: "ACTIVE" as const,
      featured: true
    },
    {
      name: "Stanford University",
      rank: 2,
      country: "United States",
      prestigeScore: 94,
      websiteUrl: "https://stanford.edu",
      location: "Stanford, CA",
      description: "Leading university in Silicon Valley with strong CS programs",
      status: "ACTIVE" as const,
      featured: true
    },
    {
      name: "Carnegie Mellon University",
      rank: 3,
      country: "United States",
      prestigeScore: 92,
      websiteUrl: "https://cmu.edu",
      location: "Pittsburgh, PA",
      description: "Top-ranked computer science school with strong industry connections",
      status: "ACTIVE" as const,
      featured: true
    },
    {
      name: "University of California, Berkeley",
      rank: 4,
      country: "United States",
      prestigeScore: 91,
      websiteUrl: "https://berkeley.edu",
      location: "Berkeley, CA",
      description: "Public university with excellent computer science programs",
      status: "ACTIVE" as const,
      featured: true
    },
    {
      name: "Harvard University",
      rank: 5,
      country: "United States",
      prestigeScore: 90,
      websiteUrl: "https://harvard.edu",
      location: "Cambridge, MA",
      description: "Ivy League institution with strong computer science department",
      status: "ACTIVE" as const,
      featured: true
    }
  ]

  for (const university of universities) {
    await prisma.university.create({
      data: {
        ...university,
        createdById: adminUser.id
      }
    })
  }

  console.log('✅ Universities seeded')

  // Seed Companies
  const companies = [
    {
      name: "Google",
      prestigeScore: 98,
      rank: 1,
      industry: "Technology",
      location: "Mountain View, CA",
      websiteUrl: "https://google.com",
      description: "Leading technology company specializing in search and AI",
      status: "ACTIVE" as const,
      featured: true
    },
    {
      name: "Apple",
      prestigeScore: 96,
      rank: 2,
      industry: "Technology",
      location: "Cupertino, CA",
      websiteUrl: "https://apple.com",
      description: "Innovative technology company known for consumer electronics",
      status: "ACTIVE" as const,
      featured: true
    },
    {
      name: "Microsoft",
      prestigeScore: 95,
      rank: 3,
      industry: "Technology",
      location: "Redmond, WA",
      websiteUrl: "https://microsoft.com",
      description: "Global technology leader in software and cloud services",
      status: "ACTIVE" as const,
      featured: true
    },
    {
      name: "Meta",
      prestigeScore: 93,
      rank: 4,
      industry: "Technology",
      location: "Menlo Park, CA",
      websiteUrl: "https://meta.com",
      description: "Social media and technology company focused on virtual reality",
      status: "ACTIVE" as const,
      featured: true
    },
    {
      name: "Amazon",
      prestigeScore: 92,
      rank: 5,
      industry: "Technology / E-commerce",
      location: "Seattle, WA",
      websiteUrl: "https://amazon.com",
      description: "E-commerce and cloud computing giant",
      status: "ACTIVE" as const,
      featured: true
    }
  ]

  for (const company of companies) {
    await prisma.company.create({
      data: {
        ...company,
        createdById: adminUser.id
      }
    })
  }

  console.log('✅ Companies seeded')

  console.log('🎉 Database seeding completed!')
  console.log('📧 Admin login: admin / admin123')
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
