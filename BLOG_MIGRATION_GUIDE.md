# 📝 Blog Migration Guide

## ✅ What has been completed?

### 1. **Blog Pages System (App Router)**

- ✅ `/blog` - Main index with search and filters.
- ✅ `/blog/[slug]` - Individual articles
- ✅ `/blog/category/[category]` - Category pages
- ✅ `/blog/author/[author]` - Author pages
- ✅ `/blog/search` - Advanced search

### 2. **BlogSection Connected to Real Posts**

The `BlogSection` component can now:

- ✅ Manually select posts from Sanity
- ✅ Automatically display posts by category
- ✅ Display latest published posts
- ✅ Display trending posts from the site
- ✅ Popular posts in sidebar using real references

---

## 🚀 How to Use BlogSection with Real Posts

### In Sanity Studio

1. **Open your page/document** where you want to add a BlogSection

2. **Add the BlogSection component** to your page

3. **Configure basic content**:
   - Main Title (optional)
   - Image (optional)
   - Pill (optional)
   - Heading
   - Subheading

4. **Go to the "Posts Selection" tab** and choose one of these methods:

#### Option A: Manual Selection

```
Post Selection Method: Manual Selection
↓
Select Posts Manually: [Select the posts you want]
```

#### Option B: By Category

```
Post Selection Method: By Category
↓
Number of Posts to Display: 3 (or your preferred number)
Select Category: [Choose a category]
```

#### Option C: Latest Posts

```
Post Selection Method: Latest Posts
↓
Number of Posts to Display: 6 (or your preferred number)
```

#### Option D: Trending Posts

```
Post Selection Method: Trending Posts
↓
Number of Posts to Display: 3 (or your preferred number)
```

5. **Sidebar (Optional)**:
   - Enable Sidebar: Yes/No
   - Search Placeholder
   - Sidebar Image (optional)
   - Categories Heading
   - Categories (manual list or leave empty)
   - Popular Posts Heading
   - **Popular Posts: You can now select real posts** (maximum 4)

---

## 📊 Available Queries

### In your TypeScript code:

```typescript
import {
  postQuery, // Single post
  categoryPostsQuery, // Posts by category
  categoriesQuery, // All categories
  categoryQuery, // Single category
  authorPostsQuery, // Posts by author
  authorQuery, // Single author
  authorsQuery, // All authors
} from '@/lib/queries'
```

---

## 🎨 Usage Example

### Page with automatic BlogSection:

In Sanity Studio:

1. Create/edit a page
2. Add "Blog Section" component
3. Configure:
   - Heading: "Latest Articles"
   - Subheading: "Read our latest posts"
   - Post Selection: "Latest Posts"
   - Number of Posts: 6
4. Save and publish

The component will automatically display the 6 most recent posts with:

- Featured image
- Category
- Title
- Excerpt
- Author and date
- Link to article

---

## 🔄 Migrating Existing BlogSections

If you already have BlogSections with hardcoded `blogCard` items:

### Option 1: Replace with manual selection

1. Open the BlogSection in Sanity
2. Switch to "Posts Selection" → "Manual Selection"
3. Select the real posts that match
4. Remove the old hardcoded blogCards

### Option 2: Switch to automatic

1. Decide what type of posts you want to show (latest, by category, etc.)
2. Configure the corresponding selection method
3. Hardcoded items will no longer be used (component uses `posts` first)

---

## 🎯 Advantages of the New System

### Before (Hardcoded):

❌ You had to manually copy title, image, excerpt, etc.  
❌ If you changed a post, you had to manually update it in the BlogSection  
❌ No automatic synchronization

### Now (Connected):

✅ Select the post and everything updates automatically  
✅ Changes to the post are reflected automatically  
✅ You can display posts dynamically (latest, trending, etc.)  
✅ Less manual work

---

## 🛠️ Created File Structure

```
apps/web/src/app/
├── (pages)/blog/
│   ├── [slug]/page.tsx           # Individual articles
│   ├── author/[author]/page.tsx  # Author pages
│   ├── category/[category]/page.tsx # Category pages
│   ├── page.tsx                  # Blog index
│   └── search/page.tsx           # Search
├── components/
│   ├── BlogPostLayout/           # Article layout
│   ├── BlogIndexLayout/          # Index layout
│   ├── BlogCategoryLayout/       # Category layout
│   ├── BlogAuthorLayout/         # Author layout
│   ├── BlogSearchLayout/         # Search layout
│   └── BlogSection/              # ✨ Updated for real posts
└── lib/queries/
    └── blogQueries.ts            # ✨ New blog queries

packages/studio/schema/components/
└── blogSection.ts                # ✨ Updated schema
```

---

## 📝 Important Notes

1. **Backward compatibility**: The BlogSection component still supports `items` (hardcoded blogCards) but prioritizes `posts` if available.

2. **Regenerate pages**: After adding/modifying posts in Sanity, you need a site rebuild to generate static pages.

3. **Draft Mode**: You can preview posts in draft mode before publishing them.

4. **Popular Posts in Sidebar**: Now uses references to real posts, so they update automatically.

---

## 🎉 Ready to Use!

Your blog system is fully functional and connected. Now:

1. Go to Sanity Studio (http://localhost:3333/studio/)
2. Create some posts if you don't have them
3. Add a BlogSection to a page
4. Select real posts
