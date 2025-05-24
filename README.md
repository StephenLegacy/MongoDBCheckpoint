

# 📁 MongoDB CRUD Operations Using MongoDB Playground in VS Code

This project demonstrates how to perform basic CRUD (Create, Read, Update, Delete) operations in **MongoDB** using the **MongoDB Playground feature in Visual Studio Code**.

---

## 🛠️ Tools & Technologies Used

* **MongoDB Atlas** (Cloud Database)
* **MongoDB Playground** (VS Code Extension)
* **MongoDB Shell (mongosh)** Syntax
* **VS Code Terminal**

---

## 🔌 Step-by-Step Process

### 1. **Connect to MongoDB Atlas Cluster**

Make sure you are connected to your MongoDB Atlas cluster via MongoDB Playground:

```javascript
// Replace <username>, <password>, and <cluster-url> with your details
const connection = await Mongo.connect("mongodb+srv://<username>:<password>@<cluster-url>/test");
```

> ⚠️ Make sure you whitelist your IP address in MongoDB Atlas.

---

### 2. **Switch to the `contact` Database**

```javascript
const db = connection.db("contact");
```

---

### 3. **Create a Collection and Insert Documents**

We create a collection called `contactlist` and insert five sample contacts:

```javascript
await db.collection("contactlist").insertMany([
  { last_name: "Ben", first_name: "Moris", email: "ben@gmail.com", age: 26 },
  { last_name: "Kefi", first_name: "Seif", email: "kefi@gmail.com", age: 15 },
  { last_name: "Emilie", first_name: "brouge", email: "emilie.b@gmail.com", age: 40 },
  { last_name: "Alex", first_name: "brown", age: 4 },
  { last_name: "Denzel", first_name: "Washington", age: 3 }
]);
```

---

### 4. **Read Operations**

* ✅ Display all contacts:

```javascript
await db.collection("contactlist").find().toArray();
```

* ✅ Display one contact using `_id`:

```javascript
await db.collection("contactlist").findOne({ _id: ObjectId("your_object_id_here") });
```

* ✅ Display contacts with age > 18:

```javascript
await db.collection("contactlist").find({ age: { $gt: 18 } }).toArray();
```

* ✅ Display contacts with age > 18 and name containing `"ah"`:

```javascript
await db.collection("contactlist").find({
  age: { $gt: 18 },
  $or: [
    { first_name: /ah/i },
    { last_name: /ah/i }
  ]
}).toArray();
```

---

### 5. **Update Operation**

Update the contact with the name `"Kefi Seif"` to `"Kefi Anis"`:

```javascript
await db.collection("contactlist").updateOne(
  { last_name: "Kefi", first_name: "Seif" },
  { $set: { first_name: "Anis" } }
);
```

---

### 6. **Delete Operation**

Remove all contacts with age less than 5:

```javascript
await db.collection("contactlist").deleteMany({ age: { $lt: 5 } });
```

---

### 7. **Final Output**

Display all remaining contacts:

```javascript
await db.collection("contactlist").find().toArray();
```

---

## 🖼️ Screenshots 
They show code snippet and results on the playground

---

## ✅ Summary

This assignment checkpoint demonstrates how to use **MongoDB Playground** within **VS Code** to perform CRUD operations in a clean, interactive, and developer-friendly environment. It’s great for quick testing, practice, and prototyping with MongoDB.

---
