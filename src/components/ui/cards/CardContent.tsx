interface CardContentProps {
  description: string;
}

export default function CardContent({ description }: CardContentProps) {
  return (
    <p className="text-[16px] text-textos leading-[150%]">
      { description }
    </p>
  );
}
