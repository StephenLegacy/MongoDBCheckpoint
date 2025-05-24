
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


print("\n All contacts in the list:")
db.contactlist.find().pretty()

print("\n Displaying one contact by _id:")
db.contactlist.findOne({ _id: ObjectId("68315fcef8046b1e576e6f98") })


print("\n Contacts with age > 18:")
db.contactlist.find({ age: { $gt: 18 } }).pretty()


print("\n Contacts with age > 18 and name containing 'ah':")
db.contactlist.find({
  age: { $gt: 18 },
  $or: [
    { first_name: /ah/i },
    { last_name: /ah/i }
  ]
}).pretty()

print("\n Updating contact Kefi Seif to Kefi Anis...")
db.contactlist.updateOne(
  { last_name: "Kefi", first_name: "Seif" },
  { $set: { first_name: "Anis" } }
)


print("\n Deleting contacts with age < 5...")
db.contactlist.deleteMany({ age: { $lt: 5 } })


print("\n Final list of contacts:")
db.contactlist.find().pretty()
