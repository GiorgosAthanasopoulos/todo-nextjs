migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bda9t8r3l1ikvvo")

  collection.name = "notes"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bda9t8r3l1ikvvo")

  collection.name = "todos"

  return dao.saveCollection(collection)
})
