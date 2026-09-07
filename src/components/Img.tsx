import type { ImgHTMLAttributes } from 'react'

interface ImgProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string // caminho do .jpg — o .webp correspondente é derivado automaticamente
}

/**
 * <picture> com fonte WebP e fallback em JPEG — usar em vez de <img> puro
 * sempre que a imagem vier de /public/images (todas têm um par .jpg + .webp).
 */
export default function Img({ src, alt, loading = 'lazy', ...rest }: ImgProps) {
  // Build de preview (artifact-preview.html) embute as imagens como data URIs —
  // nesse caso a derivação .jpg -> .webp por sufixo não se aplica (não há ganho
  // de banda ao inlinear tudo em um único arquivo), então usamos só o <img>.
  if (import.meta.env.VITE_ARTIFACT_BUILD === 'true') {
    return <img src={src} alt={alt} loading={loading} {...rest} />
  }
  const webp = src.replace(/\.jpe?g$/i, '.webp')
  return (
    <picture>
      <source srcSet={webp} type="image/webp" />
      <img src={src} alt={alt} loading={loading} {...rest} />
    </picture>
  )
}
