import { Separator, Typography } from '@common/components';

/* eslint-disable-next-line */
export interface ReviewCardProps {
  author: string;
  content: string;
  score: string;
}

export function ReviewCard({ author, content, score }: ReviewCardProps) {
  return (
    <article className="border-secondary-100 rounded-lg border p-3">
      <header className="flex justify-between">
        <Typography.Title tag="h4" weight="semibold">
          {author}
        </Typography.Title>
        <div className="bg-primary-100 text-primary-400 flex h-5 items-center rounded px-2 text-xs">
          <span className="text-primary-500 text-sm">{score}</span>/5
        </div>
      </header>
      <Separator className="my-2" />
      <Typography.Text color="secondary" size="sm">
        {content}
      </Typography.Text>
    </article>
  );
}

export default ReviewCard;
