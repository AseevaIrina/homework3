const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

interface IPost {
    postId: number
    id: number
    name: string
    email: string
    body: string
}

type MyPost = Pick<IPost, "id" | "email">

const getData = async (url: string): Promise<IPost[] | undefined> => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            return response.json();
        }
    } catch (e) {
        console.log(e)
    }
}

getData(COMMENTS_URL)
    .then(data => {
        if (data) {
            const myPost: MyPost[] = [];
            data.map(post => {
                myPost.push({ id: post.id, email: post.email })
            });
            myPost.map(post => {
                console.log(`ID: ${post.id}, Email: ${post.email}`)
            })
        }
    });