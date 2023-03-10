let groupsCollection;

export default class GroupsDAO {
    static async injectDB(conn) {
        if (groupsCollection) {
            return;
        }
        try {
            groupsCollection = await conn.db(process.env.BOOKREVIEWS_NS)
                            .collection('groups');
        }
        catch(e) {
            console.error(`Unable to connect in GroupsDAO: ${e}`);
        }
    }

    static async updateGroups(groupId, userId) {
        try {
            const updateResponse = await groupsCollection.updateOne(
                { _id: groupId },
                { $set: { userId: userId }},
                { upsert: true }
            )
            return updateResponse
        }
        catch(e) {
            console.error(`Unable to update groups: ${e}`);
            return { error: e };
        }
    }

    static async getGroups(id) {
        let cursor;
        try {
            cursor = await groupsCollection.find({
                _id: id
            });
            const groups = await cursor.toArray();
            return groups[0];
        } catch(e) {
            console.error(`Something went wrong in getGroup: ${e}`);
            throw e;
        }
    }
}