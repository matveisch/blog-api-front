export interface comment {
    body: string,
    date: Date
}

export interface props {
    title: string,
    body: string,
    date: Date,
    comments?: comment[],
}