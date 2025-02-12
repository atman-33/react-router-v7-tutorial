import { type ActionFunctionArgs, redirect } from 'react-router';
import { prisma } from '~/.server/lib/prisma-client';

export const action = async ({ params }: ActionFunctionArgs) => {
  await prisma.contact.delete({ where: { id: params.contactId } });

  // TODO: 後でトースト表示を追加

  return redirect('/contacts');
};
