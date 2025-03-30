function followers(arr) {
    let followersInfo = new Map();
    let index = 0;
    let command = arr[index];
    index++;
    while (command !== `Log out`) {
        let [action, ...tokens] = command.split(`: `);
        if (action === `New follower`) {
            let [username] = tokens;
            if (!followersInfo.has(username)) {
                followersInfo.set(username, { likes: 0, comments: 0 })
            }

        } else if (action === `Like`) {
            let [username, likes] = tokens;
            likes = +likes;
            if (followersInfo.has(username)) {
                followersInfo.get(username).likes += likes;
            } else {
                if (followersInfo.get(username)?.comments !== undefined) {
                    followersInfo.set(username, { comments: followersInfo.get(username).comments, likes: likes })
                } else {
                    followersInfo.set(username, { comments: 0, likes: likes });
                }

            }
        } else if (action === `Comment`) {
            let [username] = tokens;
            if (followersInfo.has(username)) {
                followersInfo.get(username).comments++;
            } else {
                if (followersInfo.get(username)?.likes !== undefined) {
                    followersInfo.set(username, { likes: followersInfo.get(username).likes, comments: 1 })
                } else {
                    followersInfo.set(username, { likes: 0, comments: 1 })
                }

            }
        } else if (action === `Blocked`) {
            let [username] = tokens;
            if (followersInfo.has(username)) {
                followersInfo.delete(username)
            } else {
                console.log(`${username} doesn't exist.`);

            }
        }


        command = arr[index];
        index++;
    }

    let entries = followersInfo.entries();

    console.log(`${followersInfo.size} followers`);

    for (let entry of entries) {
        let [username, { likes, comments }] = entry;
        let totalSum = likes + comments;
        console.log(`${username}: ${totalSum}`);


    }

}
followers(["New follower: George",
    "Like: George: 5",
    "New follower: George",
    "Log out"])
