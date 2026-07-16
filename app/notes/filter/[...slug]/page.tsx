import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

import NotesClient from "./Notes.client";
import { fetchNotes } from "@/lib/api";

type Props = {
  params: Promise<{ slug: string[] }>;
};

const NotesPage = async ({params}: Props) => {
  const { slug } = await params;
  const tag = slug[0] === 'all' ? undefined : slug[0];
  const queryClient = new QueryClient();

  console.log(slug);
    console.log(tag);
  //console.log(tag)

  await queryClient.prefetchQuery({
    queryKey: ["notes", 1, "", tag],
    queryFn: () =>
      fetchNotes({
        page: 1,
        search: "",
        tag,
      }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={tag}/>
    </HydrationBoundary>
  );
};

export default NotesPage;