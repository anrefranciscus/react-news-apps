import classNames from 'classnames';

const NewsCard = ({
  src,
  title,
  publishedAt,
  author,
  sourceName,
  description,
  url,
  notLastChild,
}) => {
  return (
    <div
      className={classNames(
        'flex flex-col border-[#e5e7eb] border-[1px] rounded-[6px] w-[100%] shadow-[0_2px_4px_rgba(0,0,0,0.18)] overflow-hidden',
        {
          'mb-[16px]': notLastChild,
        },
      )}
    >
      <div className='relative'>
        <img className='w-[100%] max-w-[480px] h-auto' src={src} alt={`${title} thumbnail img`} />
        <p className='absolute left-0 right-0 bottom-0 text-[18px] font-bold text-[#f3f4f6] leading-[1.25] p-[8px] title'>
          {title}
        </p>
      </div>

      <div className='flex flex-col p-[16px]'>
        <p className='mb-[4px] text-[10px] text-[#ef4444] leading-[0.025em]'>{publishedAt}</p>
        <p className='mb-[16px] text-[10px] text-[#111827] font-bold leading-[1.5]'>{`${author} | ${sourceName}`}</p>
        <p className='text-[10px] text-[#4b5563] leading-[1.5] tracking-widest'>{description}</p>
        <a
          className='text-[12px] font-bold underline ml-auto mt-[16px] text-[#ef4444]'
          href={url}
          target='_blank'
          rel='noreferrer noopener'
        >
          Go to website
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
