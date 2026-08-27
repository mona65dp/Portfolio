link: https://mona65dp.github.io/Portfolio/

## 🇹🇭 Thai Version (ภาษาไทย)
[ **TH** | [EN](#english) ]

เอกสารฉบับนี้สรุปหลักการออกแบบ การใช้งานทางเทคนิค และคำแนะนำการใช้งานสำหรับเว็บไซต์พอร์ตโฟลิโอแบบหน้าเดียว (Single-page)

### 1. แนวคิดการออกแบบ: "Liquid Glass"
ภาษาภาพหลัก (Design language) สำหรับพอร์ตโฟลิโอนี้คือ **Glassmorphism** ที่ถูกนำมาปรับปรุงให้เป็นความสวยงามในรูปแบบ "Liquid Glass" (กระจกเหลว) แบบกำหนดเอง เป้าหมายคือการสร้างความรู้สึกที่ทันสมัย สะอาดตา และมีชีวิตชีวา ซึ่งช่วยขับเน้นเนื้อหาให้โดดเด่นโดยไม่ทำให้ภาพรวมดูรกตา

**องค์ประกอบภาพที่สำคัญ:**
*   **การ์ดโปร่งแสง (Translucent Cards):** บล็อกเนื้อหา (เกี่ยวกับฉัน, ประสบการณ์, โปรเจกต์) ใช้พื้นหลังแบบกึ่งโปร่งใสร่วมกับเอฟเฟกต์เบลออย่างหนัก (`backdrop-filter: blur()`) เทคนิคนี้ช่วยให้มองเห็นพื้นหลังที่เคลื่อนไหวอยู่ด้านล่างได้อย่างนุ่มนวล สร้างมิติความตื้นลึก
*   **รูปทรงหยดน้ำพื้นหลังที่ลอยได้ (Floating Background Blobs):** แทนที่จะใช้พื้นหลังแบบภาพนิ่งหรือการไล่ระดับสีที่ซับซ้อนซึ่งอาจทำให้เกิดแถบสี (Color banding) พื้นหลังของเว็บนี้จะใช้ "หยดน้ำ" (blobs) ขนาดใหญ่ที่มีรูปทรงเป็นธรรมชาติ สีสันนุ่มนวล (Indigo, Emerald, Pink) และถูกทำให้เบลอ หยดน้ำเหล่านี้ถูกทำให้เคลื่อนไหวด้วย CSS `@keyframes` เพื่อให้ล่องลอยอย่างช้าๆ สร้างการเคลื่อนไหวที่ลื่นไหลต่อเนื่องคล้ายกับลาวาแลมป์ (Lava lamp)
*   **ธีมสว่างที่เน้นความเปรียบต่าง (Light Theme with High Contrast):** ธีมพื้นฐานเป็นโทนสว่าง เพื่อให้แน่ใจว่าอ่านเนื้อหาได้ง่าย สีของตัวอักษรจะใช้โทนเข้ม (`text-gray-900`, `text-gray-600`) เพื่อให้โดดเด่นตัดกับพื้นหลังที่สว่างและนุ่มนวล
*   **แถบนำทางแบบลอยตัว (Floating Navigation):** แถบนำทาง (Navbar) เป็นองค์ประกอบรูปทรงแคปซูลที่ลอยอยู่ ซึ่งเลียนแบบความสวยงามของกระจก พร้อมด้วยตัวบ่งชี้สถานะที่ใช้งานอยู่ (Active state) ในโหมดสีเข้ม เพื่อเพิ่มสัมผัสที่ทันสมัย

### 2. การนำไปใช้งานทางเทคนิค (Technical Implementation)
เว็บไซต์นี้ถูกสร้างขึ้นในรูปแบบ Single Page Application (SPA) ที่มีน้ำหนักเบาและประสิทธิภาพสูง โดยใช้เทคโนโลยี React สมัยใหม่

**เครื่องมือที่ใช้ (Tech Stack):**
*   **React (Vite):** ใช้สำหรับการสร้างโครงสร้าง UI แบบ Component-based มีการใช้ React Hooks (`useState`, `useEffect`) เพื่อจัดการสถานะ (State) ต่างๆ เช่น การเปิด/ปิดเมนูบนมือถือ และการสลับแท็บในส่วนโปรเจกต์
*   **Tailwind CSS:** ติดตั้งผ่านระบบ Build (PostCSS) ใช้สำหรับการจัดสไตล์อย่างรวดเร็ว การจัดวางเลย์เอาต์ที่รองรับทุกหน้าจอ (Responsive layout - Grid & Flexbox) และคลาสอรรถประโยชน์ (Utility classes) 
*   **Lucide React / React Icons:** ใช้สำหรับไอคอนเวกเตอร์ที่ปรับขนาดได้ (โซเชียลมีเดีย, องค์ประกอบ UI) แทนการดึงไฟล์ Font Awesome ผ่าน CDN
*   **Google Fonts (Inter):** ฟอนต์ตระกูล sans-serif ที่สะอาดตาและอ่านง่ายมาก เหมาะสำหรับอินเทอร์เฟซดิจิทัล

**ไฮไลท์ CSS แบบกำหนดเอง (ในไฟล์ `index.css` หรือ CSS Modules):**
*   `.liquid-card` / `.liquid-glass`: คลาสแบบกำหนดเองที่ผสมผสานข้อจำกัดด้านอรรถประโยชน์ของ Tailwind เข้ากับการตั้งค่า `backdrop-filter` และ `box-shadow` เฉพาะตัว เพื่อให้ได้รูปลักษณ์แบบกระจกที่แม่นยำ
*   `.blob-bg`: คลาสที่กำหนดขนาด สี และรัศมีการเบลอของรูปทรงพื้นหลัง
*   `@keyframes float`: แอนิเมชันที่ควบคุมการเคลื่อนไหวที่ช้าและต่อเนื่องของหยดน้ำพื้นหลัง

### 3. โครงสร้างเลย์เอาต์
เลย์เอาต์สามารถปรับเปลี่ยนได้อย่างสมบูรณ์ (Fully responsive) โดยปรับให้เข้ากับหน้าจอตั้งแต่โทรศัพท์มือถือไปจนถึงหน้าจอเดสก์ท็อปขนาดใหญ่

*   **แถบนำทาง (Navbar):** ตรึงอยู่ที่ด้านบนสุด ประกอบด้วยลิงก์สำหรับการเลื่อนอย่างนุ่มนวล (Smooth scrolling) ไปยังส่วนต่างๆ
*   **ส่วนแนะนำตัว / เกี่ยวกับฉัน (Hero / About Me):** แนะนำผู้ใช้ด้วยหัวข้อขนาดใหญ่ ตำแหน่งที่ตั้ง ประวัติย่อ และลิงก์โซเชียล/การติดต่อที่ผสานเป็น Component
*   **ประสบการณ์ & การศึกษา (Experience & Education):** ใช้เลย์เอาต์ CSS Grid (บนหน้าจอขนาดกลางขึ้นไป)
    *   *คอลัมน์ซ้าย:* การศึกษาและทักษะทางเทคนิค
    *   *คอลัมน์ขวา:* ไทม์ไลน์ประสบการณ์การทำงานโดยละเอียด
    *   *ส่วนล่างเต็มความกว้าง:* บล็อกเน้นความสำเร็จ (Achievement)
*   **โปรเจกต์ (Projects):** นำเสนออินเทอร์เฟซแบบแท็บ (จัดการ State ด้วย `useState` ของ React) เพื่อสลับระหว่าง "Game Projects" และ "Web & App Projects" โปรเจกต์ต่างๆ จะแสดงอยู่ในการ์ดที่ปรับตามขนาดหน้าจอ
*   **ส่วนท้าย (Footer):** ส่วนท้ายที่สะอาดตาในสไตล์กระจก สรุปข้อมูลการติดต่อและลิขสิทธิ์ มีการลด Padding ให้น้อยที่สุดเพื่อให้แต่ละส่วนเชื่อมต่อกันอย่างแนบเนียน

### 4. วิธีใช้งานและปรับแต่ง

#### ขั้นตอนที่ 1: การติดตั้งและรันโปรเจกต์
เนื่องจากโปรเจกต์นี้ใช้ React และ Tailwind CSS จึงต้องมีสภาพแวดล้อม Node.js ติดตั้งอยู่ในเครื่อง
```bash
# Clone repository หรือแตกไฟล์โฟลเดอร์โปรเจกต์
cd portfolio-witthaya

# ติดตั้ง Dependencies ทั้งหมด
npm install

# รันเซิร์ฟเวอร์จำลองสำหรับการพัฒนา (Development Server)
npm run dev
```
เปิด `http://localhost:5173` (หรือพอร์ตที่ Vite กำหนด) ในเว็บเบราว์เซอร์ของคุณ

#### ขั้นตอนที่ 2: การอัปเดตเนื้อหา
เนื้อหาถูกแบ่งออกเป็น React Components ให้เปิดโค้ดในโปรแกรมแก้ไขข้อความ (เช่น VS Code) เพื่ออัปเดตข้อมูล:
*   **ลิงก์โซเชียล:** ไปที่ `src/components/Hero.jsx` (หรือ Component ที่เกี่ยวข้อง) และแทนที่ URL ในแอตทริบิวต์ `href` เป็นลิงก์ของคุณ
*   **รูปภาพ:** 
    *   นำไฟล์รูปภาพของคุณไปวางไว้ในโฟลเดอร์ `public/images/`
    *   อัปเดตพาธรูปภาพในไฟล์ข้อมูล (เช่น `src/data/projects.js`) หรือในแท็ก `<img src="/images/project1.jpg" />` ภายใน Component โดยตรง

#### ขั้นตอนที่ 3: การแก้ไขสี
สีหลักถูกกำหนดไว้ในไฟล์การกำหนดค่าของ Tailwind ให้เปิด `tailwind.config.js`:
```javascript
export default {
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5', // เปลี่ยนรหัสสี hex นี้
        secondary: '#10B981', // เปลี่ยนรหัสสี hex นี้
      }
    }
  }
}
```
คุณสามารถเปลี่ยนสีหยดน้ำพื้นหลังได้ในไฟล์ `src/index.css`:
```css
.blob-1 { background-color: #c7d2fe; } /* เปลี่ยนสีตรงนี้ */
```

#### ขั้นตอนที่ 4: การเพิ่มโปรเจกต์ใหม่
โปรเจกต์ต่างๆ ควรถูกดึงข้อมูลมาจาก Array
1. เปิดไฟล์ `src/data/projects.js` (หรือจุดที่ประกาศ State Array ของโปรเจกต์)
2. เพิ่ม Object ใหม่เข้าไปใน Array:
```javascript
{
  id: 3,
  title: "โปรเจกต์เกมใหม่",
  category: "game",
  image: "/images/new-game.jpg",
  description: "รายละเอียดของโปรเจกต์เกมใหม่ของคุณ...",
  tags: ["Unity", "C#"]
}
```
React Component จะทำการเรนเดอร์การ์ดโปรเจกต์ใหม่ให้อัตโนมัติในเลย์เอาต์แท็บที่ถูกต้อง


# Witthaya Audomrat - Junior Game Designer & Developer


---

<a name="english"></a>

## 🇬🇧 English Version

This document outlines the design principles, technical implementation, and customization guidelines for the single-page portfolio website.

### 1. Design Concept: "Liquid Glass"
The primary design language for this portfolio is **Glassmorphism**, refined into a custom "Liquid Glass" aesthetic. The goal is to create a modern, clean, and vibrant feel that highlights the content without visual clutter.

**Key Visual Elements:**
*   **Translucent Cards:** Content blocks (About, Experience, Projects) utilize a semi-transparent background coupled with a heavy blur effect (`backdrop-filter: blur()`). This technique allows the moving background to gently show through, creating a sense of depth.
*   **Floating Background Blobs:** Instead of static backgrounds or complex gradients that might cause color banding, the background features large, organically shaped "blobs" in soft hues (Indigo, Emerald, Pink). These blurred blobs are animated using CSS `@keyframes` to drift slowly, creating a continuous fluid motion akin to a lava lamp.
*   **Light Theme with High Contrast:** The base theme is light to ensure maximum readability. Typography uses dark tones (`text-gray-900`, `text-gray-600`) to contrast sharply against the bright, soft background.
*   **Floating Navigation:** The Navbar is a floating capsule-shaped element that mimics the glass aesthetic, complete with dark mode active-state indicators for a modern touch.

### 2. Technical Implementation
The website is built as a lightweight, performant Single Page Application (SPA) using a modern React stack.

**Tech Stack:**
*   **React (Vite):** Utilized for component-based UI architecture. React Hooks (`useState`, `useEffect`) manage states like the mobile menu toggle and the project tab switching.
*   **Tailwind CSS:** Integrated via PostCSS for rapid styling, responsive layouts (CSS Grid & Flexbox), and utility classes.
*   **Lucide React / React Icons:** Used for scalable, lightweight standard icons (social media, UI elements) replacing CDN-based font icons.
*   **Google Fonts (Inter):** A clean, highly legible sans-serif font family optimized for digital interfaces.

**Custom CSS Highlights (in `index.css` or CSS Modules):**
*   `.liquid-card` / `.liquid-glass`: Custom utility classes that combine Tailwind's utility constraints with specific `backdrop-filter` and `box-shadow` settings to achieve the precise glass look.
*   `.blob-bg`: Defines the size, color, and blur radius of the background shapes.
*   `@keyframes float`: The animation controlling the slow, continuous movement of the background blobs.

### 3. Layout Structure
The layout is fully responsive, adapting seamlessly from mobile phones to ultra-wide desktop monitors.

*   **Navbar:** Fixed at the top, containing smooth-scrolling anchor links to various sections.
*   **Hero / About Me:** Introduces the user with a prominent headline, location, brief bio, and integrated social/contact links.
*   **Experience & Education:** Utilizes CSS Grid (on medium screens and up).
    *   *Left Column:* Education and technical skills.
    *   *Right Column:* Detailed work experience timeline.
    *   *Full-width Bottom:* Achievement highlight block.
*   **Projects:** Features a tabbed interface (managed via React `useState`) to toggle between "Game Projects" and "Web & App Projects". Projects are displayed in responsive grid cards.
*   **Footer:** A clean, glass-styled footer summarizing contact info and copyright, with minimized padding to blend seamlessly with the bottom of the page.

### 4. Getting Started & Customization

#### Step 1: Installation and Running the Site
Since this project uses React and Tailwind CSS, a Node.js environment is required.
```bash
# Clone the repository or extract the project folder
cd portfolio-witthaya

# Install dependencies
npm install

# Start the development server
npm run dev
```
Open `http://localhost:5173` (or the port provided by Vite) in your browser.

#### Step 2: Updating Content
Content is structured into reusable React components. Open your code editor (e.g., VS Code) to update the text:
*   **Social Links:** Navigate to `src/components/Hero.jsx` (or similar) and replace the `href` URLs with your own.
*   **Images:** 
    *   Place your project image files in the `public/images/` directory.
    *   Update the image paths in your data file (e.g., `src/data/projects.js`) or directly within the `Projects.jsx` component (e.g., `src="/images/project1.jpg"`).

#### Step 3: Modifying Colors
Core colors are defined in the Tailwind configuration file. Open `tailwind.config.js`:
```javascript
export default {
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5', // Change this hex code
        secondary: '#10B981', // Change this hex code
      }
    }
  }
}
```
To modify the background blob colors, locate them in `src/index.css`:
```css
.blob-1 { background-color: #c7d2fe; } /* Update color here */
```

#### Step 4: Adding New Projects
Project data is ideally mapped from an array. 
1. Open `src/data/projects.js` (or the state array in your `Projects.jsx`).
2. Add a new object to the array:
```javascript
{
  id: 3,
  title: "New Game Project",
  category: "game",
  image: "/images/new-game.jpg",
  description: "Description of your new project...",
  tags: ["Unity", "C#"]
}
```
The React component will automatically render the new project card within the correct tab layout.

---
---

