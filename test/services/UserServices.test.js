const UserService = require('./../../app/services/UserServices')

describe('Test for UserService', () => {
    test("1) Create a new user using the UserService", () => {
        const user = UserService.create(1, "washiprah", "Marcos Silva")

        expect(user.username).toBe("washiprah")
        expect(user.name).toBe("Marcos Silva")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
    test("2) Get all user data in a List", () => {
        const user = UserService.create(1, "washiprah", "Marcos Silva")
        const userInfoInList = UserService.getInfo(user)
        
        expect(userInfoInList[0]).toBe(1)   
        expect(userInfoInList[1]).toBe("washiprah")
        expect(userInfoInList[2]).toBe("Marcos Silva")
        expect(userInfoInList[3]).toBe("Sin bio")
    })
    test("3) Update username", () => {
        const user = UserService.create(1, "washiprah", "Marcos Silva")
        UserService.updateUserUserName(user, "washisaurio")
        expect(user.username).toBe("washisaurio")    
    })
    test("4) Given a list of users give me the list of usernames", () => {
        const user1 = UserService.create(1, "washiprah1", "Marcos Silva")
        const user2 = UserService.create(2, "washiprah2", "Marcos Silva")
        const user3 = UserService.create(3, "washiprah3", "Marcos Silva")

        const usernames = UserService.getAllUserNames([user1,user2,user3])

        expect(usernames).toContain("washiprah1")
        expect(usernames).toContain("washiprah2")
        expect(usernames).toContain("washiprah3")
    })
}) 