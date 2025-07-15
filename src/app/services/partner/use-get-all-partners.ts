import { useQuery } from '@tanstack/react-query';

export function useGetAllPartners() {
  return useQuery<Bumper.Partner[]>({
    queryKey: ['partners'],
    queryFn: async () => {
      const res = await fetch('/api/partners');

      if (!res.ok) throw new Error('Failed to fetch partners');

      return res.json();
    },
  });
}
