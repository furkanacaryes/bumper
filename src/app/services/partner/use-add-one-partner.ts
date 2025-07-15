import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useAddOnePartner() {
  const queryClient = useQueryClient();

  return useMutation<Bumper.Partner, unknown, Bumper.Partner>({
    mutationFn: async (newPartner) => {
      const res = await fetch('/api/partners', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPartner),
      });

      if (!res.ok) throw new Error('Failed to add partner');

      return res.json();
    },
    onSuccess: (newPartner) => {
      queryClient.setQueryData<Bumper.Partner[]>(['partners'], (old = []) => [
        ...old,
        newPartner,
      ]);
    },
  });
}
