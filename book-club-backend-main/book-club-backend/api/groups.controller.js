import GroupsDAO from '../dao/groupsDAO.js';

export default class GroupsController {

    static async apiUpdateGroups(req, res, next) {
        try {
            const GroupsResponse = await GroupsDAO.updateGroups(
                req.body.groupId,
                req.body.userId
            )
            var { error } = GroupsResponse
            if (error) {
                res.status(500).json({ error });
            }
            res.json({ status: "success" });
        } catch(e) {
            res.status(500).json({ error: e.message })
        }
    }

    static async apiGetGroups(req, res, next) {
        try {
            let id = req.params._id;
            let groups = await GroupsDAO.getGroups(id);
            if (!groups) {
                res.status(404).json({ error: "not found" });
                return;
            }
            res.json(groups);
        } catch(e) {
            console.log(`API, ${e}`);
            res.status(500).json({ error: e });
        }
    }
}