interface Board {
  id: string;
  name: string;
  type: BoardType;
}

export enum BoardType {
  ALL = "all",
  IT = "it",
  WANTED = "wanted",
  JUMFIT = "jumfit",
}

interface PageProps {
  params: { type: Board["type"] };
}

export default function Page({ params }: PageProps) {
  return <div>My Post : {params.type}</div>;
}
