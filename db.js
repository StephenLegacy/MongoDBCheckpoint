
// STEP 1: Switch to (or create) the `contact` database
use contact


// STEP 2: Create the `contactlist` collection and insert 5 documents

db.contactlist.insertMany([
  {
    last_name: "Ben",
    first_name: "Moris",
    email: "ben@gmail.com",
    age: 26
  },
  {
    last_name: "Kefi",
    first_name: "Seif",
    email: "kefi@gmail.com",
    age: 15
  },
  {
    last_name: "Emilie",
    first_name: "brouge",
    email: "emilie.b@gmail.com",
    age: 40
  },
  {
    last_name: "Alex",
    first_name: "brown",
    age: 4
  },
  {
    last_name: "Denzel",
    first_name: "Washington",
    age: 3
  }
])

// STEP 3: Display ALL documents in the contactlist collection
print("\nAll contacts in the list:")
db.contactlist.find().pretty()

// STEP 4: Display ONE contact by ID
print("\nDisplaying one contact by _id:")
db.contactlist.findOne({ _id: ObjectId("SOME_OBJECT_ID") })

// STEP 5: Display contacts with age > 18
print("\nContacts with age > 18:")
db.contactlist.find({ age: { $gt: 18 } }).pretty()

// STEP 6: Display contacts with age > 18 AND a name containing "ah"
// Searches in both first_name and last_name (case-insensitive)
print("\nContacts with age > 18 and name containing 'ah':")
db.contactlist.find({
  age: { $gt: 18 },
  $or: [
    { first_name: /ah/i },
    { last_name: /ah/i }
  ]
}).pretty()

// STEP 7: Update the first name of contact "Kefi Seif" to "Kefi Anis"
print("\nUpdating contact Kefi Seif to Kefi Anis...")
db.contactlist.updateOne(
  { last_name: "Kefi", first_name: "Seif" },
  { $set: { first_name: "Anis" } }
)

// STEP 8: Delete contacts with age < 5
print("\nDeleting contacts with age < 5...")
db.contactlist.deleteMany({ age: { $lt: 5 } })

// STEP 9: Display the final list of all contacts
print("\nFinal list of contacts:")
db.contactlist.find().pretty()
