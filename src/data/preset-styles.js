export const presetStyles = [
  {
    name: 'No Preset Style',
    styles: [
      {
        name: 'No Preset Style',
        prompt: '{prompt}'
      }
    ]
  },
  {
    name: 'General Styles',
    styles: [
      {
        name: 'Enhance',
        prompt: 'breathtaking {prompt} . award-winning, professional, highly detailed',
        negative: 'ugly, deformed, noisy, blurry, distorted, grainy'
      },
      {
        name: 'Anime',
        prompt:
          'anime artwork {prompt} . anime style, key visual, vibrant, studio anime, highly detailed',
        negative: 'photo, deformed, black and white, realism, disfigured, low contrast'
      },
      {
        name: 'Photographic',
        prompt:
          'cinematic photo {prompt} . 35mm photograph, film, bokeh, professional, 4k, highly detailed',
        negative:
          'drawing, painting, crayon, sketch, graphite, impressionist, noisy, blurry, soft, deformed, ugly'
      },
      {
        name: 'Digital art',
        prompt:
          'concept art {prompt} . digital artwork, illustrative, painterly, matte painting, highly detailed',
        negative: 'photo, photorealistic, realism, ugly'
      },
      {
        name: 'Comic book',
        prompt:
          'comic {prompt} . graphic illustration, comic art, graphic novel art, vibrant, highly detailed',
        negative: 'photograph, deformed, glitch, noisy, realistic, stock photo'
      },
      {
        name: 'Fantasy art',
        prompt:
          'ethereal fantasy concept art of {prompt} . magnificent, celestial, ethereal, painterly, epic, majestic, magical, fantasy art, cover art, dreamy',
        negative:
          'photographic, realistic, realism, 35mm film, dslr, cropped, frame, text, deformed, glitch, noise, noisy, off-center, deformed, cross-eyed, closed eyes, bad anatomy, ugly, disfigured, sloppy, duplicate, mutated, black and white'
      },
      {
        name: 'Analog film',
        prompt:
          'analog film photo {prompt} . faded film, desaturated, 35mm photo, grainy, vignette, vintage, Kodachrome, Lomography, stained, highly detailed, found footage',
        negative:
          'painting, drawing, illustration, glitch, deformed, mutated, cross-eyed, ugly, disfigured'
      },
      {
        name: 'Neonpunk',
        prompt:
          'neonpunk style {prompt} . cyberpunk, vaporwave, neon, vibes, vibrant, stunningly beautiful, crisp, detailed, sleek, ultramodern, magenta highlights, dark purple shadows, high contrast, cinematic, ultra detailed, intricate, professional',
        negative:
          'painting, drawing, illustration, glitch, deformed, mutated, cross-eyed, ugly, disfigured'
      },
      {
        name: 'Isometric',
        prompt:
          'isometric style {prompt} . vibrant, beautiful, crisp, detailed, ultra detailed, intricate',
        negative:
          'deformed, mutated, ugly, disfigured, blur, blurry, noise, noisy, realistic, photographic'
      },
      {
        name: 'Lowpoly',
        prompt:
          'low-poly style {prompt} . low-poly game art, polygon mesh, jagged, blocky, wireframe edges, centered composition',
        negative: 'noisy, sloppy, messy, grainy, highly detailed, ultra textured, photo'
      },
      {
        name: 'Origami',
        prompt:
          'origami style {prompt} . paper art, pleated paper, folded, origami art, pleats, cut and fold, centered composition',
        negative: 'noisy, sloppy, messy, grainy, highly detailed, ultra textured, photo'
      },
      {
        name: 'Line art',
        prompt:
          'line art drawing {prompt} . professional, sleek, modern, minimalist, graphic, line art, vector graphics',
        negative:
          'anime, photorealistic, 35mm film, deformed, glitch, blurry, noisy, off-center, deformed, cross-eyed, closed eyes, bad anatomy, ugly, disfigured, mutated, realism, realistic, impressionism, expressionism, oil, acrylic'
      },
      {
        name: 'Craft clay',
        prompt: 'play-doh style {prompt} . sculpture, clay art, centered composition, Claymation',
        negative: 'sloppy, messy, grainy, highly detailed, ultra textured, photo'
      },
      {
        name: 'Cinematic',
        prompt:
          'cinematic film still {prompt} . shallow depth of field, vignette, highly detailed, high budget Hollywood movie, bokeh, cinemascope, moody, epic, gorgeous, film grain, grainy',
        negative:
          'anime, cartoon, graphic, text, painting, crayon, graphite, abstract, glitch, deformed, mutated, ugly, disfigured'
      },
      {
        name: '3d-model',
        prompt:
          'professional 3d model {prompt} . octane render, highly detailed, volumetric, dramatic lighting',
        negative: 'ugly, deformed, noisy, low poly, blurry, painting'
      },
      {
        name: 'Pixel Art',
        prompt: 'pixel-art {prompt} . low-res, blocky, pixel art style, 8-bit graphics',
        negative: 'sloppy, messy, blurry, noisy, highly detailed, ultra textured, photo, realistic'
      },
      {
        name: 'Texture',
        prompt: 'texture {prompt} top down close-up',
        negative: 'ugly, deformed, noisy, blurry'
      },
      {
        name: 'Space art',
        prompt:
          'galactic style {prompt} . nebula, constellation, cosmic, celestial, highly detailed, starry',
        negative: 'blurry, grainy, deformed, photo-realistic, low-contrast, terrestrial'
      },
      {
        name: 'Street art',
        prompt:
          'urban graffiti style {prompt} . vibrant, edgy, street art, underground, spray paint effect',
        negative: 'clean, minimalistic, soft, gentle, blurry, off-center'
      },
      {
        name: 'Baroque',
        prompt:
          'Baroque art {prompt} . ornate, richly detailed, dramatic, high contrast, complex composition',
        negative: 'minimalistic, low-contrast, blurry, deformed, modern, abstract'
      },
      {
        name: 'Abstract',
        prompt: 'abstract {prompt} . imaginative, surreal, non-representational, dream-like',
        negative: 'realistic, photo, literal, symmetrical, rigid'
      },
      {
        name: 'Pointillism',
        prompt: 'pointillism art {prompt} . dots, dappled, stipples, highly detailed',
        negative: 'smooth, blurry, photo-realistic, non-dotted'
      },
      {
        name: 'Impressionist',
        prompt:
          'impressionist painting {prompt} . soft edges, vibrant, loose brushwork, atmospheric, highly detailed',
        negative: 'hard edges, muted colors, tight brushwork, non-atmospheric'
      },
      {
        name: 'Pop art',
        prompt: 'pop art {prompt} . vibrant, mass culture, comic style, bold lines, ironic',
        negative: 'soft, elegant, high culture, realistic, subtle lines'
      },
      {
        name: 'Minimalist',
        prompt: 'minimalist design {prompt} . clean, simple, restrained, elegant',
        negative: 'busy, complex, flamboyant, disfigured'
      },
      {
        name: 'Art Deco',
        prompt: 'art deco {prompt} . opulent, lavish, ornate, symmetrical, geometric',
        negative: 'minimalistic, simple, asymmetrical, organic'
      },
      {
        name: 'Cubist',
        prompt: 'cubist {prompt} . abstract, geometric, fragmented, multiple perspectives',
        negative: 'realistic, smooth, unbroken, single perspective'
      },
      {
        name: 'Dada',
        prompt: 'dada style {prompt} . absurd, satirical, avant-garde, abstract',
        negative: 'serious, traditional, conventional, realistic'
      },
      {
        name: 'Victorian',
        prompt: 'Victorian style {prompt} . elegant, ornate, highly detailed, historical',
        negative: 'modern, minimalist, low detail, contemporary'
      },
      {
        name: 'Art Nouveau',
        prompt: 'art nouveau {prompt} . organic, curvilinear, decorative, highly detailed',
        negative: 'geometric, straight lines, functional, low detail'
      },
      {
        name: 'Futuristic',
        prompt: 'futuristic {prompt} . advanced, high-tech, sleek, modern',
        negative: 'old, low-tech, chunky, historical'
      },
      {
        name: 'Medieval',
        prompt: 'medieval style {prompt} . historical, ornate, religious, gothic',
        negative: 'modern, simple, secular, minimalist'
      },
      {
        name: 'Industrial',
        prompt: 'industrial style {prompt} . mechanical, robust, urban, gritty',
        negative: 'natural, fragile, rural, clean'
      },
      {
        name: 'Vaporwave',
        prompt: 'vaporwave style {prompt} . retro, neon, pixelated, nostalgic',
        negative: 'modern, monochrome, high-resolution, forward-looking'
      },
      {
        name: 'Horror',
        prompt: 'horror style {prompt} . dark, eerie, gothic, macabre',
        negative: 'light, cheerful, minimalist, happy'
      },
      {
        name: 'Gothic',
        prompt: 'gothic style {prompt} . dark, mysterious, intricate, moody',
        negative: 'light, cheerful, simple, vibrant'
      },
      {
        name: 'Steampunk',
        prompt: 'steampunk style {prompt} . retro, mechanical, detailed, Victorian',
        negative: 'modern, digital, minimalist, contemporary'
      },
      {
        name: 'Retro',
        prompt: 'retro style {prompt} . vintage, nostalgic, old-fashioned, highly detailed',
        negative: 'modern, futuristic, forward-looking, low detail'
      },
      {
        name: 'Surrealist',
        prompt: 'surrealist {prompt} . dream-like, bizarre, irrational, highly detailed',
        negative: 'realistic, mundane, rational, low detail'
      },
      {
        name: 'Realism',
        prompt: 'realism style {prompt} . lifelike, detailed, accurate, representational',
        negative: 'abstract, simplistic, inaccurate, non-representational'
      },
      {
        name: 'Silhouette',
        prompt: 'silhouette style {prompt} . minimalist, monochrome, stark, high contrast',
        negative: 'detailed, multicolored, soft, low contrast'
      },
      {
        name: 'Collage',
        prompt: 'collage style {prompt} . mixed media, assembled, eclectic, highly detailed',
        negative: 'uniform, unvarying, minimalist, low detail'
      },
      {
        name: 'Watercolor',
        prompt: 'watercolor {prompt} . soft, blended, transparent, fluid',
        negative: 'hard, unblended, opaque, rigid'
      },
      {
        name: 'Calligraphy',
        prompt: 'calligraphy {prompt} . elegant, flowing, ornate, highly detailed',
        negative: 'plain, rigid, simple, low detail'
      },
      {
        name: 'Expressionist',
        prompt: 'expressionist style {prompt} . emotional, intense, vibrant, highly detailed',
        negative: 'emotionless, calm, muted, low detail'
      },
      {
        name: 'Fauvist',
        prompt: 'fauvist style {prompt} . bold color, exaggerated, expressive, highly detailed',
        negative: 'neutral color, realistic, restrained, low detail'
      },
      {
        name: 'Renaissance',
        prompt: 'Renaissance style {prompt} . classical, humanistic, realistic, highly detailed',
        negative: 'modern, abstract, unrealistic, low detail'
      },
      {
        name: 'Photorealistic',
        prompt: 'photorealistic {prompt} . highly detailed, lifelike, precise, accurate',
        negative: 'abstract, low detail, unrealistic, inaccurate'
      },
      {
        name: 'Symbolic',
        prompt:
          'symbolic style {prompt} . conceptual, representative, allegorical, highly detailed',
        negative: 'literal, non-representative, factual, low detail'
      },
      {
        name: 'Avant-garde',
        prompt: 'avant-garde style {prompt} . experimental, innovative, non-traditional',
        negative: 'traditional, conventional, classic'
      },
      {
        name: 'Mosaic',
        prompt: 'mosaic style {prompt} . fragmented, assembled, colorful, highly detailed',
        negative: 'whole, unbroken, monochrome, low detail'
      },
      {
        name: "Trompe l'oeil",
        prompt:
          "trompe l'oeil style {prompt} . deceptive, optical illusion, 3D effect, realistic, highly detailed",
        negative: 'honest, 2D effect, unrealistic, low detail'
      },
      {
        name: 'Rococo',
        prompt: 'rococo style {prompt} . ornate, playful, romantic, pastel, highly detailed',
        negative: 'minimalistic, serious, unromantic, dark, low detail'
      },
      {
        name: 'Macabre',
        prompt: 'macabre style {prompt} . dark, eerie, grotesque, highly detailed',
        negative: 'light, cheerful, beautiful, low detail'
      },
      {
        name: 'Satirical',
        prompt: 'satirical style {prompt} . humorous, ironic, exaggerated, critical',
        negative: 'serious, literal, realistic, complimentary'
      },
      {
        name: 'Pixelated',
        prompt: 'pixelated style {prompt} . retro, low-res, digital, blocky',
        negative: 'modern, high-res, organic, smooth'
      },
      {
        name: 'Futurist',
        prompt: 'futurist style {prompt} . dynamic, modern, mechanized, highly detailed',
        negative: 'static, historical, organic, low detail'
      },
      {
        name: 'Primitive',
        prompt: 'primitive style {prompt} . raw, simple, naive, highly detailed',
        negative: 'refined, complex, sophisticated, low detail'
      },
      {
        name: 'Byzantine',
        prompt: 'Byzantine style {prompt} . rich, ornate, religious, iconic, highly detailed',
        negative: 'poor, simple, secular, non-iconic, low detail'
      },
      {
        name: 'Psychedelic',
        prompt: 'psychedelic style {prompt} . vibrant, abstract, distorted, highly detailed',
        negative: 'muted, realistic, undistorted, low detail'
      },
      {
        name: 'Suprematist',
        prompt: 'suprematist style {prompt} . geometric, abstract, non-objective, simple',
        negative: 'organic, realistic, objective, complex'
      },
      {
        name: 'Constructivist',
        prompt: 'constructivist style {prompt} . industrial, geometric, political, highly detailed',
        negative: 'organic, curvilinear, apolitical, low detail'
      },
      {
        name: 'De Stijl',
        prompt: 'de Stijl style {prompt} . abstract, geometric, primary colors',
        negative: 'organic, curvilinear, muted colors, black and white'
      },
      {
        name: 'Ukiyo-e',
        prompt:
          'ukiyo-e style {prompt} . woodblock print, vibrant, historical Japanese art, detailed',
        negative: 'digital, muted, modern, Western'
      },
      {
        name: 'Dystopian',
        prompt: 'dystopian style {prompt} . bleak, oppressive, futuristic, detailed',
        negative: 'utopian, cheerful, historical, low detail'
      },
      {
        name: 'Biomechanical',
        prompt:
          'biomechanical style {prompt} . organic meets mechanical, alien, detailed, H.R. Giger-inspired',
        negative: 'geometric, earthy, low detail, not H.R. Giger-inspired'
      },
      {
        name: 'Hyperrealism',
        prompt: 'hyperrealistic style {prompt} . ultra-detailed, lifelike, precision, crisp',
        negative: 'abstract, low detail, unrealistic, blurry'
      },
      {
        name: 'Glitch',
        prompt: 'glitch style {prompt} . digital error, distorted, cyber, detailed',
        negative: 'analog, undistorted, organic, low detail'
      },
      {
        name: 'Arabesque',
        prompt: 'arabesque style {prompt} . geometric patterns, floral, Islamic art, detailed',
        negative: 'chaotic, animalistic, non-Islamic art, low detail'
      },
      {
        name: 'Brutalist',
        prompt: 'brutalist style {prompt} . raw, rugged, geometric, concrete, detailed',
        negative: 'smooth, delicate, curvilinear, abstract, low detail'
      },
      {
        name: 'Chiaroscuro',
        prompt: 'chiaroscuro style {prompt} . high contrast, dramatic lighting, detailed',
        negative: 'low contrast, flat lighting, low detail'
      },
      {
        name: 'Tenebrism',
        prompt: 'tenebrism style {prompt} . dark, dramatic illumination, high contrast, detailed',
        negative: 'light, flat lighting, low contrast, low detail'
      },
      {
        name: 'Romantic',
        prompt: 'romantic style {prompt} . emotional, dramatic, nature-focused, detailed',
        negative: 'unemotional, flat, city-focused, low detail'
      },
      {
        name: 'Bauhaus',
        prompt: 'bauhaus style {prompt} . functional, geometric, minimal, detailed',
        negative: 'ornamental, curvilinear, maximal, low detail'
      },
      {
        name: 'Art brut',
        prompt: 'art brut style {prompt} . raw, outsider art, naïve, detailed',
        negative: 'refined, mainstream art, sophisticated, low detail'
      },
      {
        name: 'Metaphysical',
        prompt: 'metaphysical style {prompt} . surreal, eerie, uncanny, detailed',
        negative: 'realistic, comfortable, familiar, low detail'
      },
      {
        name: 'Neoplasticism',
        prompt:
          'neoplasticism style {prompt} . geometric, primary colors, black and white, abstract',
        negative: 'organic, muted colors, colorful, realistic'
      },
      {
        name: 'Hard-edge',
        prompt: 'hard-edge style {prompt} . geometric, flat colors, precision, detailed',
        negative: 'organic, gradient colors, imprecise, low detail'
      },
      {
        name: 'Automatism',
        prompt: 'automatism style {prompt} . unconscious, spontaneous, abstract, detailed',
        negative: 'conscious, planned, realistic, low detail'
      },
      {
        name: 'Tachisme',
        prompt: 'tachisme style {prompt} . gestural, abstract, spontaneous, detailed',
        negative: 'controlled, realistic, planned, low detail'
      },
      {
        name: 'Lyrical abstraction',
        prompt:
          'lyrical abstraction style {prompt} . emotional, non-figurative, expressive, detailed',
        negative: 'unemotional, figurative, restrained, low detail'
      },
      {
        name: 'Color field',
        prompt: 'color field style {prompt} . flat, large fields of color, minimal, detailed',
        negative: 'textured, small patches of color, maximal, low detail'
      },
      {
        name: 'Synthetism',
        prompt: 'synthetism style {prompt} . simplified, symbolic, bright colors, detailed',
        negative: 'complex, literal, muted colors, low detail'
      },
      {
        name: 'Cloisonnism',
        prompt: 'cloisonnism style {prompt} . bold outlines, flat colors, decorative, detailed',
        negative: 'soft outlines, gradient colors, functional, low detail'
      },
      {
        name: 'Assemblage',
        prompt: 'assemblage style {prompt} . three-dimensional, found objects, eclectic, detailed',
        negative: 'two-dimensional, traditional materials, uniform, low detail'
      },
      {
        name: 'Vorticism',
        prompt: 'vorticism style {prompt} . geometric, abstract, dynamic, detailed',
        negative: 'organic, realistic, static, low detail'
      },
      {
        name: 'Op art',
        prompt: 'op art style {prompt} . optical illusions, geometric, black and white, detailed',
        negative: 'no illusions, organic, colorful, low detail'
      },
      {
        name: 'Divisionism',
        prompt: 'divisionism style {prompt} . color theory, dot technique, vibrant, detailed',
        negative: 'black and white, smooth technique, muted, low detail'
      },
      {
        name: 'Kinetic art',
        prompt: 'kinetic art style {prompt} . movement, dynamic, interactive, detailed',
        negative: 'static, static, non-interactive, low detail'
      },
      {
        name: 'Orphism',
        prompt: 'orphism style {prompt} . pure color, abstract, musical, detailed',
        negative: 'mixed color, realistic, non-musical, low detail'
      },
      {
        name: 'Suprematism',
        prompt: 'suprematism style {prompt} . geometric, abstract, limited color palette, detailed',
        negative: 'organic, realistic, broad color palette, low detail'
      },
      {
        name: 'Letterism',
        prompt: 'letterism style {prompt} . letters, typographic, abstract, detailed',
        negative: 'images, non-typographic, realistic, low detail'
      },
      {
        name: 'Situationalist',
        prompt: 'situationalist style {prompt} . political, collage, detournement, detailed',
        negative: 'apolitical, single medium, straightforward, low detail'
      },
      {
        name: 'Sound art',
        prompt: 'sound art style {prompt} . auditory, abstract, non-visual, detailed',
        negative: 'visual, realistic, silent, low detail'
      },
      {
        name: 'Land art',
        prompt: 'land art style {prompt} . natural materials, outdoor, environmental, detailed',
        negative: 'synthetic materials, indoor, non-environmental, low detail'
      },
      {
        name: 'Photorealistic graffiti',
        prompt: 'photorealistic graffiti style {prompt} . urban, street art, lifelike, detailed',
        negative: 'rural, gallery art, abstract, low detail'
      },
      {
        name: 'Hypermodern',
        prompt: 'hypermodern style {prompt} . postmodern, technology focused, sleek, detailed',
        negative: 'premodern, nature focused, rustic, low detail'
      },
      {
        name: 'Virtual realism',
        prompt: 'virtual realism style {prompt} . digital, lifelike, immersive, detailed',
        negative: 'analog, abstract, non-immersive, low detail'
      },
      {
        name: 'Structural film',
        prompt: 'structural film style {prompt} . experimental, non-narrative, texture, detailed',
        negative: 'traditional, narrative, smooth, low detail'
      },
      {
        name: 'Process art',
        prompt: 'process art style {prompt} . creation focused, ephemeral, documentation, detailed',
        negative: 'result focused, permanent, no documentation, low detail'
      },
      {
        name: 'Light and space',
        prompt:
          'light and space style {prompt} . perceptual phenomena, immersive, minimal, detailed',
        negative: 'solid objects, non-immersive, maximal, low detail'
      },
      {
        name: 'Post-internet',
        prompt: 'post-internet style {prompt} . digital culture, technology, online, detailed',
        negative: 'pre-internet, nature, offline, low detail'
      },
      {
        name: 'Bio-art',
        prompt: 'bio-art style {prompt} . living organisms, ethical, natural, detailed',
        negative: 'inorganic, unethical, synthetic, low detail'
      }
    ]
  },
  {
    name: "Artists' Styles",
    styles: [
      {
        name: 'Van Gogh',
        prompt: 'Van Gogh style {prompt} . Expressive, impasto, swirling brushwork, vibrant',
        negative: 'realistic, photorealistic, calm, straight lines'
      },
      {
        name: 'Warhol',
        prompt: 'Warhol style {prompt} . Pop art, bold colors, mass production, repetitive',
        negative: 'subdued colors, traditional, unique, serious'
      },
      {
        name: 'Picasso',
        prompt: 'Picasso style {prompt} . Cubist, geometric, abstract, innovative',
        negative: 'realistic, detailed, smooth, fluid, single perspective'
      },
      {
        name: 'Da Vinci',
        prompt: 'Da Vinci style {prompt} . Realistic, sfumato, detailed, chiaroscuro',
        negative: 'abstract, vibrant colors, bold, loose brushwork'
      },
      {
        name: 'Monet',
        prompt: 'Monet style {prompt} . Impressionist, light-filled, loose brushwork, en plein air',
        negative: 'defined, detailed, subdued, studio work'
      },
      {
        name: 'Dali',
        prompt: 'Dali style {prompt} . Surrealist, dreamlike, bizarre, symbolic',
        negative: 'realistic, ordinary, rational, clear, obvious'
      },
      {
        name: 'Pollock',
        prompt: 'Pollock style {prompt} . Abstract expressionist, gestural, dripping, layered',
        negative: 'sharp, precise, realistic, calm'
      },
      {
        name: 'Rothko',
        prompt: 'Rothko style {prompt} . Color field, abstract, simple, large-scale',
        negative: 'detailed, small, complex, figurative'
      },
      {
        name: 'Matisse',
        prompt: 'Matisse style {prompt} . Fauvist, bold colors, loose, decorative',
        negative: 'realistic, subdued colors, detailed, serious'
      },
      {
        name: 'Banksy',
        prompt: 'Banksy style {prompt} . Street art, satirical, stenciled, urban',
        negative: 'classic, traditional, indoor, realism'
      },
      {
        name: 'Michelangelo',
        prompt: 'Michelinagelo style {prompt} . High Renaissance, sculptural, detailed, humanistic',
        negative: 'abstract, loose, simplistic, impersonal'
      },
      {
        name: 'Kusama',
        prompt: 'Kusama style {prompt} . Pop Art, abstract, polka dots, immersive',
        negative: 'plain, monotone, realistic, sparse'
      },
      {
        name: 'Hokusai',
        prompt: 'Hokusai style {prompt} . Ukiyo-e, woodblock print, detailed, narrative',
        negative: 'abstract, free-form, modern, minimal'
      },
      {
        name: 'Cézanne',
        prompt: 'Cézanne style {prompt} . Post-impressionist, geometric, detailed, brushstrokes',
        negative: 'smooth, flat, loose, fluid'
      },
      {
        name: 'Hopper',
        prompt: 'Hopper style {prompt} . Realistic, light and shadow, loneliness, American urban',
        negative: 'busy, crowded, vibrant, abstract'
      },
      {
        name: 'Klimt',
        prompt: 'Klimt style {prompt} . Symbolist, decorative, ornamental, sensual',
        negative: 'simple, bare, abstract, rough'
      },
      {
        name: 'Chagall',
        prompt: 'Chagall style {prompt} . Surrealist, dreamy, vibrant, narrative',
        negative: 'realistic, dull, serious, minimal'
      },
      {
        name: 'Lichtenstein',
        prompt: 'Lichtenstein style {prompt} . Pop art, comic strip, bold, ironic',
        negative: 'realistic, traditional, serious, detailed'
      },
      {
        name: 'Basquiat',
        prompt:
          'Basquiat style {prompt} . Neo-expressionist, primitive, graffiti, social commentary',
        negative: 'polished, elegant, subdued, subtle'
      },
      {
        name: 'Frida Kahlo',
        prompt: 'Frida Kahlo style {prompt} . Symbolic, surrealistic, emotional, vibrant',
        negative: 'realistic, subdued, impersonal, monochromatic'
      },
      {
        name: 'Jackson Pollock',
        prompt:
          'Jackson Pollock style {prompt} . Abstract expressionist, action painting, drip technique, energetic',
        negative: 'controlled, figurative, calm, small scale'
      },
      {
        name: 'Rembrandt',
        prompt: 'Rembrandt style {prompt} . Baroque, chiaroscuro, realistic, emotional',
        negative: 'flat lighting, abstract, impersonal, clean'
      },
      {
        name: 'Renoir',
        prompt: 'Renoir style {prompt} . Impressionist, vibrant, lively, warm',
        negative: 'dull, calm, detailed, cool colors'
      },
      {
        name: 'Magritte',
        prompt: 'Magritte style {prompt} . Surrealist, thought-provoking, mysterious, realistic',
        negative: 'abstract, obvious, open, unrefined'
      },
      {
        name: 'Manet',
        prompt: 'Manet style {prompt} . Realistic, impressionistic, bold, contemporary',
        negative: 'abstract, traditional, timid, historical'
      },
      {
        name: 'Vermeer',
        prompt: 'Vermeer style {prompt} . Baroque, detailed, light, tranquil',
        negative: 'abstract, rough, dark, chaotic'
      },
      {
        name: 'Caravaggio',
        prompt: 'Caravaggio style {prompt} . Baroque, chiaroscuro, dramatic, realistic',
        negative: 'soft lighting, calm, abstract, idealized'
      },
      {
        name: 'Rodin',
        prompt: 'Rodin style {prompt} . Realistic, expressive, textured, bronze',
        negative: 'smooth, emotionless, polished, painted'
      },
      {
        name: 'Botticelli',
        prompt: 'Botticelli style {prompt} . Early Renaissance, allegorical, graceful, detailed',
        negative: 'abstract, harsh, simplified, rough'
      },
      {
        name: 'Edward Hopper',
        prompt:
          'Edward Hopper style {prompt} . Realistic, isolation, architectural, strong contrast',
        negative: 'crowded, organic, soft lighting, abstract'
      },
      {
        name: 'Keith Haring',
        prompt:
          'Keith Haring style {prompt} . Pop art, bold lines, vibrant colors, social messages, active figures',
        negative: 'subtle, realistic, muted colors, personal'
      },
      {
        name: 'Damien Hirst',
        prompt:
          'Damien Hirst style {prompt} . Contemporary, controversial, conceptual, large scale installation',
        negative: 'classical, calming, handcrafted, small scale'
      },
      {
        name: 'Yayoi Kusama',
        prompt: 'Yayoi Kusama style {prompt} . Contemporary, polka dots, immersive, psychedelic',
        negative: 'traditional, plain, minimalist, calm'
      },
      {
        name: 'Francis Bacon',
        prompt: 'Francis Bacon style {prompt} . Existential, distorted, unsettling, expressive',
        negative: 'comforting, realistic, calm, subdued'
      },
      {
        name: 'Ai Weiwei',
        prompt:
          'Ai Weiwei style {prompt} . Conceptual, political, traditional Chinese materials, large-scale',
        negative: 'apolitical, contemporary, small-scale, western materials'
      },
      {
        name: 'Cindy Sherman',
        prompt:
          'Cindy Sherman style {prompt} . Conceptual, self-portrait, character study, cinematic',
        negative: 'landscape, group portraits, candid, documentary'
      },
      {
        name: 'Frank Stella',
        prompt:
          'Frank Stella style {prompt} . Minimalist, geometric, large scale, non-representational',
        negative: 'maximalist, organic, small scale, representational'
      },
      {
        name: 'Lucian Freud',
        prompt: 'Lucian Freud style {prompt} . Realistic, impasto, psychological, intimate',
        negative: 'abstract, smooth, impersonal, public'
      },
      {
        name: 'Marc Chagall',
        prompt: 'Marc Chagall style {prompt} . Dreamlike, vibrant, symbolic, folklore-inspired',
        negative: 'realistic, subdued, literal, modern'
      },
      {
        name: 'Roy Lichtenstein',
        prompt:
          'Roy Lichtenstein style {prompt} . Pop art, comic strip influence, benday dots, bold outlines, primary colors',
        negative: 'abstract, realistic, pastel colors, complex'
      },
      {
        name: 'Thomas Kinkade',
        prompt: 'Thomas Kinkade style {prompt} . Romantic, idealized, warm light, detailed',
        negative: 'abstract, harsh, cool light, minimalist'
      },
      {
        name: 'Joan Miró',
        prompt: 'Joan Miró style {prompt} . Surrealist, abstract, biomorphic forms, primary colors',
        negative: 'realistic, figurative, complex, muted colors'
      },
      {
        name: 'Gerhard Richter',
        prompt: 'Gerhard Richter style {prompt} . Abstract, textured, layered, scraped',
        negative: 'realistic, smooth, single-layer, detailed'
      },
      {
        name: 'Wassily Kandinsky',
        prompt: 'Wassily Kandinsky style {prompt} . Abstract, geometric, vibrant, musical',
        negative: 'realistic, organic, muted, silent'
      },
      {
        name: 'Norman Rockwell',
        prompt: 'Norman Rockwell style {prompt} . Realistic, narrative, Americana, detailed',
        negative: 'abstract, non-narrative, foreign, minimalist'
      },
      {
        name: 'Bridget Riley',
        prompt:
          'Bridget Riley style {prompt} . Op art, geometric, black and white, optical illusion',
        negative: 'organic, color, realistic, straightforward'
      },
      {
        name: 'Piet Mondrian',
        prompt: 'Piet Mondrian style {prompt} . De Stijl, geometric, primary colors, black grid',
        negative: 'organic, multiple colors, no grid, curved lines'
      },
      {
        name: 'Salvador Dalí',
        prompt: 'Salvador Dalí style {prompt} . Surrealist, dreamlike, symbolic, detailed',
        negative: 'realistic, ordinary, literal, sketchy, day-to-day, loose, solid'
      },
      {
        name: 'Mary Cassatt',
        prompt:
          'Mary Cassatt style {prompt} . Impressionist, domestic life, soft colors, loose brushwork',
        negative: 'abstract, public life, vibrant colors, precise'
      },
      {
        name: 'Diego Rivera',
        prompt:
          'Diego Rivera style {prompt} . Muralist, social realist, Mexican culture, narrative',
        negative: 'miniature, abstract, foreign, non-narrative'
      },
      {
        name: 'Jean-Michel Basquiat',
        prompt:
          'Jean-Michel Basquiat style {prompt} . Neo-expressionist, graffiti influence, raw, socially critical',
        negative: 'classical, polished, refined, apolitical'
      },
      {
        name: 'Henry Moore',
        prompt: 'Henry Moore style {prompt} . Modernist, abstract, organic, bronze, monumental',
        negative: 'realistic, geometric, miniature, pastel'
      },
      {
        name: 'Grant Wood',
        prompt: 'Grant Wood style {prompt} . Regionalist, rural, detailed, Americana',
        negative: 'urban, abstract, vague, non-American'
      },
      {
        name: 'Andy Goldsworthy',
        prompt:
          'Andy Goldsworthy style {prompt} . Environmental art, natural materials, temporary, site-specific',
        negative: 'urban art, man-made materials, permanent, unspecific site'
      },
      {
        name: 'Louise Bourgeois',
        prompt: 'Louise Bourgeois style {prompt} . Abstract, psychological, large-scale, organic',
        negative: 'realistic, impersonal, small-scale, geometric'
      },
      {
        name: 'Ansel Adams',
        prompt: 'Ansel Adams style {prompt} . Black and white, nature, high contrast, detailed',
        negative: 'color, urban, low contrast, vague'
      },
      {
        name: 'Gustav Klimt',
        prompt: 'Gustav Klimt style {prompt} . Symbolist, decorative, golden, intricate',
        negative: 'realistic, functional, monochrome, simplified'
      },
      {
        name: 'Jeff Koons',
        prompt: 'Jeff Koons style {prompt} . Contemporary, kitsch, glossy, large-scale',
        negative: 'traditional, serious, matte, small-scale'
      },
      {
        name: 'John Singer Sargent',
        prompt: 'John Singer Sargent style {prompt} . Realistic, elegant, portrait, expressive',
        negative: 'abstract, casual, landscape, subdued'
      },
      {
        name: 'Marcel Duchamp',
        prompt: 'Marcel Duchamp style {prompt} . Dada, readymade, conceptual, controversial',
        negative: 'traditional, handmade, decorative, safe'
      },
      {
        name: 'Claude Monet',
        prompt: 'Claude Monet style {prompt} . Impressionist, outdoor, light, loose brushwork',
        negative: 'neoclassical, indoor, dark, tight brushwork'
      },
      {
        name: 'Anish Kapoor',
        prompt: 'Anish Kapoor style {prompt} . Abstract, large-scale, reflective, curved',
        negative: 'figurative, small-scale, matte, straight lines'
      },
      {
        name: 'Hieronymus Bosch',
        prompt: 'Hieronymus Bosch style {prompt} . Surrealist, detailed, religious, narrative',
        negative: 'realistic, abstract, secular, non-narrative'
      },
      {
        name: 'Paul Gauguin',
        prompt: 'Paul Gauguin style {prompt} . Post-Impressionist, exotic, bold colors, flat',
        negative: 'Impressionist, familiar, muted colors, volumetric'
      },
      {
        name: 'Katsushika Hokusai',
        prompt: 'Katsushika Hokusai style {prompt} . Ukiyo-e, nature, woodblock print, detailed',
        negative: 'western style, urban, oil painting, abstract'
      },
      {
        name: 'Pierre-Auguste Renoir',
        prompt:
          'Pierre-Auguste Renoir style {prompt} . Impressionist, joyful, light, loose brushwork',
        negative: 'neoclassical, somber, dark, tight brushwork'
      },
      {
        name: 'Antony Gormley',
        prompt:
          'Antony Gormley style {prompt} . Sculpture, human form, rusted, site-specific, public art',
        negative: 'painting, abstract, polished, gallery-based'
      },
      {
        name: 'Kazimir Malevich',
        prompt: 'Kazimir Malevich style {prompt} . Suprematism, abstract, geometric, minimal',
        negative: 'realistic, organic, decorative, complex'
      },
      {
        name: 'Jean-Antoine Watteau',
        prompt: 'Jean-Antoine Watteau style {prompt} . Rococo, outdoor, elegant, lively',
        negative: 'Baroque, indoor, serious, static'
      },
      {
        name: 'Constantin Brâncuși',
        prompt: 'Constantin Brâncuși style {prompt} . Modernist, abstract, bronze, streamlined',
        negative: 'traditional, figurative, wood, complex'
      },
      {
        name: 'Egon Schiele',
        prompt: 'Egon Schiele style {prompt} . Expressionist, figure, distorted, emotional',
        negative: 'Impressionist, landscape, proportional, detached'
      },
      {
        name: 'Nam June Paik',
        prompt: 'Nam June Paik style {prompt} . Video art, technological, interactive, large-scale',
        negative: 'painting, traditional, static, small-scale'
      },
      {
        name: 'James Whistler',
        prompt: 'James Whistler style {prompt} . Tonalism, atmospheric, subdued, abstract',
        negative: 'Fauvism, vibrant, bold, detailed'
      },
      {
        name: 'Lucio Fontana',
        prompt: 'Lucio Fontana style {prompt} . Spatialism, monochrome, slashed, minimal',
        negative: 'Futurism, colorful, whole, detailed'
      },
      {
        name: 'Artemisia Gentileschi',
        prompt:
          'Artemisia Gentileschi style {prompt} . Baroque, dramatic, biblical, female-centric',
        negative: 'Rococo, calm, mythological, male-centric'
      },
      {
        name: 'Jean Dubuffet',
        prompt: 'Jean Dubuffet style {prompt} . Art Brut, textured, primal, abstract',
        negative: 'Academic art, smooth, refined, realistic'
      },
      {
        name: 'Sandro Botticelli',
        prompt:
          'Sandro Botticelli style {prompt} . Early Renaissance, mythological, linear, vibrant',
        negative: 'Baroque, historical, painterly, subdued'
      },
      {
        name: 'Carl Andre',
        prompt: 'Carl Andre style {prompt} . Minimalist, geometric, industrial, ground-level',
        negative: 'Baroque, organic, handcrafted, elevated'
      },
      {
        name: 'David Hockney',
        prompt: 'David Hockney style {prompt} . Pop art, landscape, vibrant, digital',
        negative: 'Abstract Expressionism, figure, subdued, traditional'
      },
      {
        name: 'Jenny Holzer',
        prompt: 'Jenny Holzer style {prompt} . Conceptual, text-based, public, LED',
        negative: 'painting, image-based, private, canvas'
      },
      {
        name: 'Dante Gabriel Rossetti',
        prompt:
          'Dante Gabriel Rossetti style {prompt} . Pre-Raphaelite, medieval, literary, romantic',
        negative: 'Futurist, modern, abstract, stark'
      },
      {
        name: 'Zaha Hadid',
        prompt: 'Zaha Hadid style {prompt} . Modernist, organic, futuristic, curved',
        negative: 'Classical, geometric, traditional, straight lines'
      },
      {
        name: 'Takashi Murakami',
        prompt: 'Takashi Murakami style {prompt} . Superflat, pop culture, colorful, cartoonish',
        negative: 'Cubist, high culture, monochrome, realistic'
      },
      {
        name: 'Edward Weston',
        prompt: 'Edward Weston style {prompt} . Photography, black and white, still life, detailed',
        negative: 'Painting, color, action, abstract'
      },
      {
        name: 'Edvard Munch',
        prompt:
          'Edvard Munch style {prompt} . Expressionist, psychological, bold colors, distorted',
        negative: 'Impressionist, physical, muted colors, proportional'
      },
      {
        name: 'Georges Braque',
        prompt: 'Georges Braque style {prompt} . Cubist, abstract, collage, muted colors',
        negative: 'Romantic, realistic, oil painting, vibrant colors'
      },
      {
        name: 'Sol LeWitt',
        prompt: 'Sol LeWitt style {prompt} . Conceptual, geometric, minimal, instructional',
        negative: 'Expressionist, organic, complex, spontaneous'
      },
      {
        name: 'Giuseppe Arcimboldo',
        prompt: 'Giuseppe Arcimboldo style {prompt} . Mannerist, portrait, food, symbolic',
        negative: 'Cubist, landscape, abstract, literal'
      },
      {
        name: 'Yves Klein',
        prompt: 'Yves Klein style {prompt} . Nouveau réalisme, monochrome, blue, performance',
        negative: 'Pop Art, colorful, red, static'
      },
      {
        name: 'Mark Rothko',
        prompt:
          'Mark Rothko style {prompt} . Abstract Expressionist, color field, large-scale, emotional',
        negative: 'Pop Art, pattern, small-scale, detached'
      },
      {
        name: 'Joseph Beuys',
        prompt: 'Joseph Beuys style {prompt} . Fluxus, performance, social sculpture, felt',
        negative: 'Minimalism, painting, object, metal'
      },
      {
        name: 'Berthe Morisot',
        prompt: 'Berthe Morisot style {prompt} . Impressionist, feminine, domestic, light',
        negative: 'Surrealist, masculine, public, dark'
      },
      {
        name: 'Agnes Martin',
        prompt: 'Agnes Martin style {prompt} . Minimalist, geometric, grid, subtle',
        negative: 'Baroque, organic, floral, bold'
      },
      {
        name: 'Henri Cartier-Bresson',
        prompt:
          'Henri Cartier-Bresson style {prompt} . Photography, decisive moment, black and white, candid',
        negative: 'Painting, posed, color, staged'
      },
      {
        name: 'Marina Abramović',
        prompt:
          'Marina Abramović style {prompt} . Performance, endurance, audience participation, minimal',
        negative: 'Sculpture, instant, observer, complex'
      },
      {
        name: 'Man Ray',
        prompt: 'Man Ray style {prompt} . Dada, photography, rayograph, experimental',
        negative: 'Realism, painting, traditional, conventional'
      },
      {
        name: 'Käthe Kollwitz',
        prompt:
          'Käthe Kollwitz style {prompt} . Expressionist, social realism, black and white, human suffering',
        negative: 'Impressionist, aestheticism, color, human joy'
      },
      {
        name: 'Robert Rauschenberg',
        prompt: 'Robert Rauschenberg style {prompt} . Neo-Dada, combine, mixed-media, assemblage',
        negative: 'Minimalism, singular material, oil painting, separated'
      },
      {
        name: 'Lyonel Feininger',
        prompt:
          'Lyonel Feininger style {prompt} . Expressionist, Cubist, architecture, transparent',
        negative: 'Impressionist, organic, landscape, opaque'
      },
      {
        name: 'René Magritte',
        prompt: 'René Magritte style {prompt} . Surrealist, object, juxtaposition, mystery',
        negative: 'Realist, figure, relation, clarity'
      },
      {
        name: 'Rachel Whiteread',
        prompt: 'Rachel Whiteread style {prompt} . Contemporary, sculpture, negative space, cast',
        negative: 'Traditional, drawing, positive space, sketch'
      },
      {
        name: 'Tomma Abts',
        prompt: 'Tomma Abts style {prompt} . Abstract, geometric, small-scale, acrylic and oil',
        negative: 'Figurative, organic, large-scale, watercolor'
      },
      {
        name: 'Max Ernst',
        prompt: 'Max Ernst style {prompt} . Surrealist, collage, frottage, dreamlike',
        negative: 'Realist, oil painting, brushwork, day-to-day'
      },
      {
        name: 'Richard Serra',
        prompt: 'Richard Serra style {prompt} . Minimalist, sculpture, corten steel, site-specific',
        negative: 'Baroque, painting, canvas, gallery-specific'
      },
      {
        name: 'Ernst Ludwig Kirchner',
        prompt: 'Ernst Ludwig Kirchner style {prompt} . Expressionist, urban, woodcut, vibrant',
        negative: 'Impressionist, rural, oil painting, subdued'
      },
      {
        name: 'Eva Hesse',
        prompt: 'Eva Hesse style {prompt} . Postminimalist, sculpture, organic, fiberglass',
        negative: 'Minimalist, painting, geometric, canvas'
      },
      {
        name: 'Paul Cézanne',
        prompt:
          'Paul Cézanne style {prompt} . Post-Impressionist, still life, geometric, brushwork',
        negative: 'Impressionist, action, organic, smooth'
      },
      {
        name: 'Chuck Close',
        prompt: 'Chuck Close style {prompt} . Photorealism, portrait, large-scale, gridded',
        negative: 'Impressionism, landscape, small-scale, loose'
      },
      {
        name: 'Thomas Gainsborough',
        prompt: 'Thomas Gainsborough style {prompt} . Rococo, landscape, elegant, oil',
        negative: 'Baroque, portrait, casual, pastel'
      },
      {
        name: 'Alexander Calder',
        prompt: 'Alexander Calder style {prompt} . Kinetic, mobile, primary colors, balanced',
        negative: 'Static, statue, pastel colors, unbalanced'
      },
      {
        name: 'Anselm Kiefer',
        prompt:
          'Anselm Kiefer style {prompt} . Neo-expressionist, monumental, textured, historical',
        negative: 'Minimalist, small-scale, smooth, futuristic'
      },
      {
        name: 'Amedeo Modigliani',
        prompt: 'Amedeo Modigliani style {prompt} . Modernist, portrait, elongated, nude',
        negative: 'Cubist, landscape, proportional, clothed'
      },
      {
        name: 'Gilbert & George',
        prompt:
          'Gilbert & George style {prompt} . Contemporary, photographic, duo, confrontational',
        negative: 'Traditional, painted, individual, pleasant'
      },
      {
        name: 'El Greco',
        prompt: 'El Greco style {prompt} . Mannerist, religious, elongated, dramatic',
        negative: 'Renaissance, secular, proportional, calm'
      },
      {
        name: 'Rembrandt van Rijn',
        prompt: 'Rembrandt van Rijn style {prompt} . Baroque, self-portrait, chiaroscuro, etching',
        negative: 'Rococo, group portrait, bright, oil painting'
      },
      {
        name: "Georgia O'Keeffe",
        prompt: "Georgia O'Keeffe style {prompt} . Modernist, flowers, close-up, sensual",
        negative: 'Cubist, objects, far-off, detached'
      },
      {
        name: 'Louise Nevelson',
        prompt:
          'Louise Nevelson style {prompt} . Abstract expressionist, sculpture, monochrome, found objects',
        negative: 'Realist, painting, colorful, new materials'
      },
      {
        name: 'James Turrell',
        prompt: 'James Turrell style {prompt} . Land art, light, immersive, perceptual',
        negative: 'Street art, dark, observational, intellectual'
      },
      {
        name: 'Édouard Manet',
        prompt:
          'Édouard Manet style {prompt} . Realist, modern life, loose brushwork, controversial',
        negative: 'Romantic, history, fine brushwork, conventional'
      },
      {
        name: 'Dan Flavin',
        prompt: 'Dan Flavin style {prompt} . Minimalist, light, fluorescent, site-specific',
        negative: 'Baroque, dark, oil, gallery-specific'
      },
      {
        name: 'Sarah Lucas',
        prompt: 'Sarah Lucas style {prompt} . YBA, feminist, readymade, provocative',
        negative: 'Old Masters, masculine, handmade, conservative'
      },
      {
        name: 'Johannes Vermeer',
        prompt: 'Johannes Vermeer style {prompt} . Baroque, domestic, light, detailed',
        negative: 'Cubist, public, dark, abstract'
      },
      {
        name: 'Tadao Ando',
        prompt: 'Tadao Ando style {prompt} . Minimalist, concrete, light, water',
        negative: 'Baroque, brick, dark, dry'
      },
      {
        name: 'Joseph Cornell',
        prompt: 'Joseph Cornell style {prompt} . Surrealist, box, found objects, nostalgic',
        negative: 'Minimalist, open space, new materials, contemporary'
      },
      {
        name: 'Gustave Courbet',
        prompt:
          'Gustave Courbet style {prompt} . Realist, rural life, coarse brushwork, controversial',
        negative: 'Neoclassical, noble life, fine brushwork, conventional'
      },
      {
        name: 'Richard Long',
        prompt: 'Richard Long style {prompt} . Land art, circle, natural materials, ephemeral',
        negative: 'Street art, square, synthetic materials, permanent'
      },
      {
        name: 'Otto Dix',
        prompt: 'Otto Dix style {prompt} . New Objectivity, war, grotesque, social critique',
        negative: 'Impressionism, peace, beautiful, aesthetic enjoyment'
      },
      {
        name: 'Barnett Newman',
        prompt:
          'Barnett Newman style {prompt} . Abstract expressionism, zip, large-scale, color field',
        negative: 'Pop art, pattern, small-scale, comic strip'
      },
      {
        name: 'Sophie Calle',
        prompt: 'Sophie Calle style {prompt} . Conceptual, photography, text, personal',
        negative: 'Abstract, painting, brushwork, universal'
      },
      {
        name: 'KAWS',
        prompt: 'KAWS style {prompt} . Pop art, vinyl toy, X eyes, cartoonish',
        negative: 'Conceptual, bronze statue, normal eyes, realistic'
      },
      {
        name: 'Francis Picabia',
        prompt: 'Francis Picabia style {prompt} . Dada, machine, painting, provocative',
        negative: 'Impressionism, nature, sketch, pleasant'
      },
      {
        name: 'H.R. Giger',
        prompt: 'H.R. Giger style {prompt} . Surrealist, biomechanical, airbrush, dark',
        negative: 'Impressionist, human, brush, light'
      },
      {
        name: 'Jean Arp',
        prompt: 'Jean Arp style {prompt} . Dada, abstract, biomorphic, sculpture',
        negative: 'Realism, figurative, geometric, painting'
      },
      {
        name: 'Fernand Léger',
        prompt: 'Fernand Léger style {prompt} . Cubist, mechanical, mural, bold colors',
        negative: 'Surrealist, organic, small-scale, muted colors'
      },
      {
        name: 'Yoko Ono',
        prompt: 'Yoko Ono style {prompt} . Conceptual, performance, instruction, peace',
        negative: 'Realist, still life, detailed, war'
      },
      {
        name: 'Barbara Kruger',
        prompt: 'Barbara Kruger style {prompt} . Conceptual, text, black and white, feminist',
        negative: 'Impressionist, image, color, patriarchal'
      },
      {
        name: 'Piero della Francesca',
        prompt:
          'Piero della Francesca style {prompt} . Renaissance, fresco, mathematical, religious',
        negative: 'Contemporary, installation, random, secular'
      },
      {
        name: 'Richard Hamilton',
        prompt: 'Richard Hamilton style {prompt} . Pop Art, collage, consumer culture, mixed media',
        negative: 'Impressionism, oil painting, rural life, single medium'
      },
      {
        name: 'Grayson Perry',
        prompt: 'Grayson Perry style {prompt} . Contemporary, ceramics, tapestry, narrative',
        negative: 'Old Masters, oil painting, canvas, non-narrative'
      },
      {
        name: 'Faith Ringgold',
        prompt: 'Faith Ringgold style {prompt} . Contemporary, quilt, narrative, feminist',
        negative: 'Abstract, sculpture, non-narrative, masculine'
      },
      {
        name: 'Tracey Emin',
        prompt: 'Tracey Emin style {prompt} . YBA, confessional, neon, textile',
        negative: 'Old Masters, universal, oil, marble'
      },
      {
        name: 'Olafur Eliasson',
        prompt: 'Olafur Eliasson style {prompt} . Installation, light, environment, perceptual',
        negative: 'Painting, dark, indoors, cognitive'
      },
      {
        name: 'Kiki Smith',
        prompt: 'Kiki Smith style {prompt} . Feminist, body, sculpture, mythological',
        negative: 'Patriarchal, landscape, painting, historical'
      },
      {
        name: 'Chris Ofili',
        prompt: 'Chris Ofili style {prompt} . YBA, mixed-media, elephant dung, decorative',
        negative: 'Minimalism, single-media, clean, austere'
      },
      {
        name: 'Ellsworth Kelly',
        prompt:
          'Ellsworth Kelly style {prompt} . Hard-edge painting, color field, minimalist, geometric',
        negative: 'Impressionism, detailed, ornate, organic"'
      },
      {
        name: 'Christo and Jeanne-Claude',
        prompt:
          'Christo and Jeanne-Claude style {prompt} . Installation, environmental, fabric, temporal',
        negative: 'Still Life, indoor, metal, permanent'
      },
      {
        name: 'Wayne Thiebaud',
        prompt: 'Wayne Thiebaud style {prompt} . Pop Art, still life, pastel, thick paint',
        negative: 'Cubism, dynamic scenes, vibrant, thin paint'
      },
      {
        name: 'Maurice Sendak',
        prompt:
          "Maurice Sendak style {prompt} . Children's illustration, fantasy, detailed, narrative",
        negative: 'Abstract, adult, minimalist, non-narrative'
      }
    ]
  }
]
