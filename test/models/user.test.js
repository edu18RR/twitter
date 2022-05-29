const User = require("./../../app/models/user")

describe("Unit Test for User class", () => {
    test("1) Create a user object", () => {

        const user = new User(1, "Washiprah", "Marcos Silva", "Bio")

        expect(user.id).toBe(1)
        expect(user.username).toBe("Washiprah")
        expect(user.name).toBe("Marcos Silva")
        expect(user.bio).toBe("Bio")

        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    }),
    test("2) Add getters", () => {
        const user = new User(1, "Washiprah", "Marcos Silva", "Bio")
        expect(user.getUsername).toBe("Washiprah")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    }),
    test("3) Add setters", () => {
        const user = new User(1, "Washiprah", "Marcos Silva", "Bio")
        user.setUsername = "Washisaurio"
        expect(user.username).toBe("Washisaurio")

        user.setBio = "New Bio"
        expect(user.bio).toBe("New Bio")
    })
}) 