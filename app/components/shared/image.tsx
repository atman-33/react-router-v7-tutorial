import defaultImage from '/not-found.svg';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

/**
 * 画像コンポーネント。画像読み込みエラー時はデフォルト画像を表示する。
 */
const Image = ({ src = defaultImage, alt, ...props }: ImageProps) => {
  return (
    // biome-ignore lint/a11y/useAltText: <explanation>
    <img
      src={src}
      alt={alt}
      onError={(e) => {
        const target = e.currentTarget as HTMLImageElement;
        target.src = defaultImage;
      }}
      {...props}
    />
  );
};

export { Image };
