import { redirect } from 'react-router';
import { prisma } from '~/.server/lib/prisma-client';
import type { Route } from './+types/route';

export const action = async ({ request }: Route.ActionArgs) => {
  const formData = await request.formData();
  const { _action } = Object.fromEntries(formData);

  switch (_action) {
    case 'new': {
      const newContact = {
        first: '',
        last: '',
        avatar: '',
        twitter: '',
        notes: '',
        favorite: false,
      };

      const res = await prisma.contact.create({ data: newContact });

      // 連絡先ページにリダイレクト
      return redirect(`/contacts/${res.id}`);
    }
  }
};
