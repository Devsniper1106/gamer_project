export const getImageDimensions = (url) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        resolve({
          width: img.width,
          height: img.height,
          aspectRatio: img.width / img.height
        });
      };
      img.onerror = reject;
      img.src = url;
    });
  };
  
  export const generateBlurHash = async (imageUrl) => {
    // Implement blur hash generation if needed
    // This is a placeholder for the actual implementation
    return 'LEHV6nWB2yk8pyo0adR*.7kCMdnj';
  };
  
  export const preloadImages = (urls) => {
    urls.forEach(url => {
      const img = new Image();
      img.src = url;
    });
  };