export interface comment {
    body: string,
    date: Date
}

export interface post {
    title: string,
    body: string,
    date: Date,
    _id: string,
    comments?: comment[],
}

export interface props {
    title: string,
    body: string,
    date: Date,
    comments?: comment[],
    _id: string
}