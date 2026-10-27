const videos = [
    {
        id: 1,
        title: "Rottweiler",
        duration: 45
    },
    {
        id: 2,
        title: "Doberman",
        duration: 90
    },
    {
        id: 3,
        title: "Cane Corso",
        duration: 60
    }
];

function analyzeVideo(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (video.duration <= 60) {
                resolve({
                    id: video.id,
                    title: video.title,
                    status: "Accepted"
                });
            } else {
                reject(`Film ${video.title} jest za długi`);
            }
        }, 1500);
    });
}

async function processVideos(videos) {
    const accepted = [];
    const rejected = [];

    for (const video of videos) {
        try {
            const result = await analyzeVideo(video);
            console.log(result);
            accepted.push(result);
        } catch (error) {
            console.error(error);
            rejected.push({
                title: video.title,
                reason: error
            });
        }
    }

    return { total: videos.length, acceptedCount: accepted.length, rejectedCount: rejected.length, accepted, rejected };
}
processVideos(videos).then(({ accepted, rejected }) => {
    console.log("Accepted videos:", accepted);
    console.log("Rejected videos:", rejected);
});
