<div dir="rtl" style="text-align: right;">

# 📚 Bookstore | نظام إدارة الكتب

نظام بسيط لإدارة الكتب باستخدام JavaScript، يتيح البحث عن الكتب وإضافة الكتب وتعديل بياناتها وحذفها.

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

---

## 📖 عن المشروع (About Bookstore)

تم تطوير مشروع Bookstore كجزء من التدريب على أساسيات البرمجة باستخدام JavaScript من خلال منصة سطر. يهدف المشروع إلى تطبيق المفاهيم الأساسية في JavaScript، مثل:

* المصفوفات ثنائية الأبعاد (2D Arrays)
* الحلقات التكرارية (Loops)
* الشروط (Conditions)
* الدوال (Functions)
* التعامل مع البيانات (الإضافة، التعديل، والحذف)

---

## ⚙️ الوظائف الرئيسية (Core Features)

### 1. 🔍 البحث باستخدام ID
البحث عن كتاب باستخدام رقم الـ ID وعرض التفاصيل التالية:
* اسم الكتاب
* المؤلف
* السعر
* الكمية

### 2. 📖 البحث باستخدام اسم الكتاب
إمكانية البحث عن كتاب باستخدام اسمه وعرض بياناته.

### 3. ✍️ البحث باستخدام اسم المؤلف
إمكانية البحث عن كتاب باستخدام اسم المؤلف.

### 4. ➕ إضافة كتاب
إضافة كتاب جديد إلى قائمة الكتب باستخدام البيانات الآتية:
* ID
* Book Title
* Author
* Price
* Quantity

### 5. ✏️ تعديل بيانات كتاب
تعديل بيانات كتاب موجود مسبقاً باستخدام رقم الـ ID.

### 6. 🗑️ حذف كتاب
حذف آخر كتاب تمت إضافته باستخدام دالة `pop()`.

---

## 🛠️ التقنيات المستخدمة (Tech Stack)
* JavaScript
* Node.js
* 2D Arrays, Functions, Loops, Conditions
* Console Interface

---

## 🚀 طريقة التشغيل (Local Setup)

### والمتطلبات الأساسية:
* يجب تثبيت **Node.js** على الجهاز.

### خطوات التشغيل:
بعد تحميل المشروع وفتح مجلد `Bookstore` في الـ Terminal، نفّذ الأمر التالي:
```bash
node books.js
