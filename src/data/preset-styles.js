export const noPresetName = 'No Preset Style'

export const presetStyles = [
  {
    name: noPresetName,
    styles: [
      {
        name: noPresetName
      }
    ]
  },
  {
    name: 'Art Styles',
    styles: [
      {
        name: 'Abstract',
        prompt: 'abstract {prompt} . imaginative, surreal, non-representational, dream-like',
        negative: 'realistic, photo, literal, symmetrical, rigid'
      },
      {
        name: 'Abstract Expressionism',
        prompt:
          'abstract expressionist style of {prompt} . bold colors, vigorous brushwork, non-representational, spontaneous, expressive, emotional',
        negative: 'boring, monotone, plain, still, unemotional, realistic, photographic'
      },
      {
        name: 'Acrylic Painting',
        prompt: 'acrylic painting of {prompt} . brush strokes, rich, detailed, colorful',
        negative: 'smooth, blended, photorealistic'
      },
      {
        name: 'Action Painting',
        prompt: 'action painting of {prompt} . spontaneous, energetic, abstract, expressive, bold',
        negative: 'precise, slow, realistic, photographic, unemotional'
      },
      {
        name: 'Anaglyph',
        prompt: 'anaglyph filter photo of {prompt} . anaglyph 3d effect',
        negative: ''
      },
      {
        name: 'Arabesque',
        prompt: 'arabesque style {prompt} . geometric patterns, floral, Islamic art, detailed',
        negative: 'chaotic, animalistic, non-Islamic art, low detail'
      },
      {
        name: 'Art Brut',
        prompt: 'art brut style {prompt} . raw, outsider art, naïve, detailed',
        negative: 'refined, mainstream art, sophisticated, low detail'
      },
      {
        name: 'Art Deco',
        prompt: 'art deco {prompt} . opulent, lavish, ornate, symmetrical, geometric',
        negative: 'minimalistic, simple, asymmetrical, organic'
      },
      {
        name: 'Art Deco',
        prompt:
          'art deco interpretation of {prompt} . geometric, bold, symmetrical, ornate, detailed, decorative',
        negative: 'soft, organic, asymmetrical, minimalist, simple'
      },
      {
        name: 'Art Nouveau',
        prompt: 'art nouveau {prompt} . organic, curvilinear, decorative, highly detailed',
        negative: 'geometric, straight lines, functional, low detail'
      },
      {
        name: 'Assemblage',
        prompt: 'assemblage style {prompt} . three-dimensional, found objects, eclectic, detailed',
        negative: 'two-dimensional, traditional materials, uniform, low detail'
      },
      {
        name: 'Automatism',
        prompt: 'automatism style {prompt} . unconscious, spontaneous, abstract, detailed',
        negative: 'conscious, planned, realistic, low detail'
      },
      {
        name: 'Avant-garde',
        prompt: 'avant-garde style {prompt} . experimental, innovative, non-traditional',
        negative: 'traditional, conventional, classic'
      },
      {
        name: 'Baroque',
        prompt:
          'Baroque art {prompt} . ornate, richly detailed, dramatic, high contrast, complex composition',
        negative: 'minimalistic, low-contrast, blurry, deformed, modern, abstract'
      },
      {
        name: 'Batik',
        prompt: 'batik style {prompt} . dyed, vibrant, patterned, textile, decorative',
        negative: 'plain, unpatterned, hard, smooth, clean, digital'
      },
      {
        name: 'Bauhaus',
        prompt: 'bauhaus style {prompt} . functional, geometric, minimal, detailed',
        negative: 'ornamental, curvilinear, maximal, low detail'
      },
      {
        name: 'Bio-art',
        prompt: 'bio-art style {prompt} . living organisms, ethical, natural, detailed',
        negative: 'inorganic, unethical, synthetic, low detail'
      },
      {
        name: 'Biomechanical',
        prompt:
          'biomechanical style {prompt} . organic meets mechanical, alien, detailed, H.R. Giger-inspired',
        negative: 'geometric, earthy, low detail, not H.R. Giger-inspired'
      },
      {
        name: 'Bone Carving',
        prompt: 'bone carving of {prompt}',
        negative: ''
      },
      {
        name: 'Botanical Illustration',
        prompt:
          'botanical illustration of {prompt} . detailed, accurate, precise, delicate, naturalistic',
        negative: 'abstract, loose, imprecise, bold, exaggerated, symbolic'
      },
      {
        name: 'Brutalist',
        prompt: 'brutalist style {prompt} . raw, rugged, geometric, concrete, detailed',
        negative: 'smooth, delicate, curvilinear, abstract, low detail'
      },
      {
        name: 'Byzantine',
        prompt: 'Byzantine style {prompt} . rich, ornate, religious, iconic, highly detailed',
        negative: 'poor, simple, secular, non-iconic, low detail'
      },
      {
        name: 'Calligraphy',
        prompt: 'calligraphy {prompt} . elegant, flowing, ornate, highly detailed',
        negative: 'plain, rigid, simple, low detail'
      },
      {
        name: 'Charcoal',
        prompt: 'charcoal sketch of {prompt} . dark, grainy, high contrast, loose, dramatic',
        negative: 'light, smooth, precise, colorful, clean, photographic'
      },
      {
        name: 'Chiaroscuro',
        prompt: 'chiaroscuro style {prompt} . high contrast, dramatic lighting, detailed',
        negative: 'low contrast, flat lighting, low detail'
      },
      {
        name: 'Chiaroscuro',
        prompt:
          'chiaroscuro technique on {prompt} . high contrast, dramatic, realistic, refined, tonal',
        negative: 'flat, dull, abstract, impressionistic, simple'
      },
      {
        name: 'Cinematic',
        prompt:
          'cinematic film still {prompt} . shallow depth of field, vignette, highly detailed, high budget Hollywood movie, bokeh, cinemascope, moody, epic, gorgeous, film grain, grainy',
        negative:
          'anime, cartoon, graphic, text, painting, crayon, graphite, abstract, glitch, deformed, mutated, ugly, disfigured'
      },
      {
        name: 'Cloisonnism',
        prompt: 'cloisonnism style {prompt} . bold outlines, flat colors, decorative, detailed',
        negative: 'soft outlines, gradient colors, functional, low detail'
      },
      {
        name: 'Collage',
        prompt: 'collage style {prompt} . mixed media, assembled, eclectic, highly detailed',
        negative: 'uniform, unvarying, minimalist, low detail'
      },
      {
        name: 'Color Field',
        prompt: 'color field style {prompt} . flat, large fields of color, minimal, detailed',
        negative: 'textured, small patches of color, maximal, low detail'
      },
      {
        name: 'Comic Book',
        prompt:
          'comic {prompt} . graphic illustration, comic art, graphic novel art, vibrant, highly detailed',
        negative: 'photograph, deformed, glitch, noisy, realistic, stock photo'
      },
      {
        name: 'Constructivist',
        prompt: 'constructivist style {prompt} . industrial, geometric, political, highly detailed',
        negative: 'organic, curvilinear, apolitical, low detail'
      },
      {
        name: 'Craft Clay',
        prompt: 'play-doh style {prompt} . sculpture, clay art, centered composition, Claymation',
        negative: 'sloppy, messy, grainy, highly detailed, ultra textured, photo'
      },
      {
        name: 'Crayon Drawing',
        prompt: 'crayon drawing of {prompt} . simple, colorful',
        negative: ''
      },
      {
        name: 'Cubism',
        prompt:
          'cubist interpretation of {prompt} . geometric forms, multi-perspective, abstract, fragmented, complex',
        negative: 'rounded, realistic, photographic, simple, straightforward, traditional'
      },
      {
        name: 'Cubist',
        prompt: 'cubist {prompt} . abstract, geometric, fragmented, multiple perspectives',
        negative: 'realistic, smooth, unbroken, single perspective'
      },
      {
        name: 'Cyberpunk',
        prompt: 'cyberpunk style {prompt} . contemporary cyber art, blade runner, neon',
        negative: ''
      },
      {
        name: 'Dada',
        prompt: 'dada style {prompt} . absurd, satirical, avant-garde, abstract',
        negative: 'serious, traditional, conventional, realistic'
      },
      {
        name: 'De Stijl',
        prompt: 'de Stijl style {prompt} . abstract, geometric, primary colors',
        negative: 'organic, curvilinear, muted colors, black and white'
      },
      {
        name: 'Digital Art',
        prompt:
          'concept art {prompt} . digital artwork, illustrative, painterly, matte painting, highly detailed',
        negative: 'photo, photorealistic, realism, ugly'
      },
      {
        name: 'Divisionism',
        prompt: 'divisionism style {prompt} . color theory, dot technique, vibrant, detailed',
        negative: 'black and white, smooth technique, muted, low detail'
      },
      {
        name: 'Drybrush',
        prompt:
          'drybrush technique on {prompt} . rough texture, loose brushwork, subtle detail, expressive, painterly',
        negative: 'smooth, precise, clean, detailed, photorealistic'
      },
      {
        name: 'Dystopian',
        prompt: 'dystopian style {prompt} . bleak, oppressive, futuristic, detailed',
        negative: 'utopian, cheerful, historical, low detail'
      },
      {
        name: 'Encaustic',
        prompt: 'encaustic painting of {prompt} . wax, textured, layered, luminous, rich',
        negative: 'flat, smooth, simple, clean, dry, photorealistic'
      },
      {
        name: 'Enhance',
        prompt: 'breathtaking {prompt} . award-winning, professional, highly detailed',
        negative: 'ugly, deformed, noisy, blurry, distorted, grainy'
      },
      {
        name: 'Expressionist',
        prompt: 'expressionist style {prompt} . emotional, intense, vibrant, highly detailed',
        negative: 'emotionless, calm, muted, low detail'
      },
      {
        name: 'Fantasy Art',
        prompt:
          'ethereal fantasy concept art of {prompt} . magnificent, celestial, ethereal, painterly, epic, majestic, magical, fantasy art, cover art, dreamy',
        negative:
          'photographic, realistic, realism, 35mm film, dslr, cropped, frame, text, deformed, glitch, noise, noisy, off-center, deformed, cross-eyed, closed eyes, bad anatomy, ugly, disfigured, sloppy, duplicate, mutated, black and white'
      },
      {
        name: 'Fauvism',
        prompt:
          'fauvist interpretation of {prompt} . wild brushwork, vibrant color, expressive, bold, emotive, painterly',
        negative: 'neutral, precise, calm, realistic, photographic, subdued'
      },
      {
        name: 'Fauvist',
        prompt: 'fauvist style {prompt} . bold color, exaggerated, expressive, highly detailed',
        negative: 'neutral color, realistic, restrained, low detail'
      },
      {
        name: 'Folk Art',
        prompt:
          'folk art depiction of {prompt} . traditional, handmade, decorative, vibrant, detailed',
        negative: 'modern, digital, simple, clean, minimalistic'
      },
      {
        name: 'Futurist',
        prompt:
          'futuristic interpretation of {prompt} . sleek, high-tech, metallic, smooth surfaces, neon, sharp edges, crystal clear, professional, ultra detailed',
        negative: 'ugly, deformed, noisy, blurry, rustic, vintage, antique'
      },
      {
        name: 'Futuristic',
        prompt: 'futuristic {prompt} . advanced, high-tech, sleek, modern',
        negative: 'old, low-tech, chunky, historical'
      },
      {
        name: 'Glass Painting',
        prompt: 'glass painting of {prompt} . translucent, vibrant, decorative, intricate, glossy',
        negative: 'matte, dull, loose, rough, opaque'
      },
      {
        name: 'Glitch',
        prompt: 'glitch style {prompt} . digital error, distorted, glitchy, glitch, detailed',
        negative: 'analog, undistorted, organic, low detail'
      },
      {
        name: 'Gothic',
        prompt: 'gothic style {prompt} . dark, mysterious, intricate, moody',
        negative: 'light, cheerful, simple, vibrant'
      },
      {
        name: 'Gouache',
        prompt: 'gouache painting of {prompt} . vibrant, opaque, smooth, rich, detailed',
        negative: 'transparent, loose, rough, dull, photorealistic'
      },
      {
        name: 'Graffiti',
        prompt:
          'graffiti style {prompt} . street art, bold, colorful, vibrant, dynamic, urban, rebellious, intricate',
        negative: 'refined, subtle, soft, elegant, traditional, photorealistic'
      },
      {
        name: 'Graffiti Stencil',
        prompt: 'graffiti stencil art of {prompt} . urban, bold, vibrant, street style, graphic',
        negative: 'elegant, refined, soft, traditional, photorealistic'
      },
      {
        name: 'Grisaille',
        prompt:
          'grisaille painting of {prompt} . monochromatic, detailed, realistic, refined, tonal',
        negative: 'colorful, abstract, loose, impressionistic, simple'
      },
      {
        name: 'Hard-edge',
        prompt: 'hard-edge style {prompt} . geometric, flat colors, precision, detailed',
        negative: 'organic, gradient colors, imprecise, low detail'
      },
      {
        name: 'Horror',
        prompt: 'horror style {prompt} . dark, eerie, gothic, macabre',
        negative: 'light, cheerful, minimalist, happy'
      },
      {
        name: 'Hudson River School',
        prompt: 'Hudson River School style {prompt} . landscape painting',
        negative: ''
      },
      {
        name: 'Hypermodern',
        prompt: 'hypermodern style {prompt} . postmodern, technology focused, sleek, detailed',
        negative: 'premodern, nature focused, rustic, low detail'
      },
      {
        name: 'Hyperrealism',
        prompt: 'hyperrealistic style {prompt} . ultra-detailed, lifelike, precision, crisp',
        negative: 'abstract, low detail, unrealistic, blurry'
      },
      {
        name: 'Impressionism',
        prompt:
          'impressionist take on {prompt} . loose brushwork, light color, emphasis on light and movement, emotive, painterly',
        negative: 'tight, photographic, dark, stationary, unemotional, sharp, digital'
      },
      {
        name: 'Impressionist',
        prompt:
          'impressionist painting {prompt} . soft edges, vibrant, loose brushwork, atmospheric, highly detailed',
        negative: 'hard edges, muted colors, tight brushwork, non-atmospheric'
      },
      {
        name: 'Industrial',
        prompt: 'industrial style {prompt} . mechanical, robust, urban, gritty',
        negative: 'natural, fragile, rural, clean'
      },
      {
        name: 'Infrared Photograph',
        prompt: 'infrared photograph of {prompt}',
        negative: ''
      },
      {
        name: 'Ink Wash',
        prompt: 'ink wash painting of {prompt} . monochromatic, loose, fluid, expressive, delicate',
        negative: 'colorful, tight, dry, bold, detailed, photorealistic'
      },
      {
        name: 'Iridescent',
        prompt: '{prompt} . ethereal, heavenly, expansive, iridescent, lens flare, psychedelic',
        negative: ''
      },
      {
        name: 'Isometric',
        prompt:
          'isometric style {prompt} . vibrant, beautiful, crisp, detailed, ultra detailed, intricate',
        negative:
          'deformed, mutated, ugly, disfigured, blur, blurry, noise, noisy, realistic, photographic'
      },
      {
        name: 'Kinetic Art',
        prompt: 'kinetic art style {prompt} . movement, dynamic, interactive, detailed',
        negative: 'static, static, non-interactive, low detail'
      },
      {
        name: 'Knurled Texture',
        prompt: 'knurled texture {prompt} . knurled, texture, detailed, intricate',
        negative: 'ugly, deformed, noisy'
      },
      {
        name: 'Land Art',
        prompt: 'land art style {prompt} . natural materials, outdoor, environmental, detailed',
        negative: 'synthetic materials, indoor, non-environmental, low detail'
      },
      {
        name: 'Letterism',
        prompt: 'letterism style {prompt} . letters, typographic, abstract, detailed',
        negative: 'images, non-typographic, realistic, low detail'
      },
      {
        name: 'Light and Space',
        prompt:
          'light and space style {prompt} . perceptual phenomena, immersive, minimal, detailed',
        negative: 'solid objects, non-immersive, maximal, low detail'
      },
      {
        name: 'Line Art',
        prompt:
          'line art drawing {prompt} . professional, sleek, modern, minimalist, graphic, line art, vector graphics',
        negative:
          'anime, photorealistic, 35mm film, deformed, glitch, blurry, noisy, off-center, deformed, cross-eyed, closed eyes, bad anatomy, ugly, disfigured, mutated, realism, realistic, impressionism, expressionism, oil, acrylic'
      },
      {
        name: 'Lithography',
        prompt: 'lithograph of {prompt} . printmaking, smooth, detailed, bold, graphic',
        negative: 'rough, textured, loose, brushy, three dimensional'
      },
      {
        name: 'Lyrical Abstraction',
        prompt:
          'lyrical abstraction style {prompt} . emotional, non-figurative, expressive, detailed',
        negative: 'unemotional, figurative, restrained, low detail'
      },
      {
        name: 'Macabre',
        prompt: 'macabre style {prompt} . dark, eerie, grotesque, highly detailed',
        negative: 'light, cheerful, beautiful, low detail'
      },
      {
        name: 'Macrame',
        prompt: 'macrame style {prompt} . knotted, textile, intricate, handmade, decorative',
        negative: 'smooth, flat, hard, precise, digital'
      },
      {
        name: 'Medieval',
        prompt: 'medieval style {prompt} . historical, ornate, religious, gothic',
        negative: 'modern, simple, secular, minimalist'
      },
      {
        name: 'Metaphysical',
        prompt: 'metaphysical style {prompt} . surreal, eerie, uncanny, detailed',
        negative: 'realistic, comfortable, familiar, low detail'
      },
      {
        name: 'Minimalist',
        prompt: 'minimalist design {prompt} . clean, simple, restrained, elegant',
        negative: 'busy, complex, flamboyant, disfigured'
      },
      {
        name: 'Mosaic',
        prompt: 'mosaic style {prompt} . fragmented, assembled, colorful, highly detailed',
        negative: 'whole, unbroken, monochrome, low detail'
      },
      {
        name: 'Neonpunk',
        prompt:
          'neonpunk style {prompt} . cyberpunk, vaporwave, neon, vibes, vibrant, stunningly beautiful, crisp, detailed, sleek, ultramodern, magenta highlights, dark purple shadows, high contrast, cinematic, ultra detailed, intricate, professional',
        negative:
          'painting, drawing, illustration, glitch, deformed, mutated, cross-eyed, ugly, disfigured'
      },
      {
        name: 'Neoplasticism',
        prompt:
          'neoplasticism style {prompt} . geometric, primary colors, black and white, abstract',
        negative: 'organic, muted colors, colorful, realistic'
      },
      {
        name: 'Noir Line Art',
        prompt: 'noir line art of {prompt} . black and white, hand-drawn, high contrast',
        negative: ''
      },
      {
        name: 'Oil Painting',
        prompt: 'oil painting of {prompt} . smooth, blended, rich, detailed, realistic',
        negative: 'rough, textured, loose, brushy, abstract'
      },
      {
        name: 'Op Art',
        prompt: 'op art style {prompt} . optical illusions, geometric, black and white, detailed',
        negative: 'no illusions, organic, colorful, low detail'
      },
      {
        name: 'Origami',
        prompt:
          'origami style {prompt} . paper art, pleated paper, folded, origami art, pleats, cut and fold, centered composition',
        negative: 'noisy, sloppy, messy, grainy, highly detailed, ultra textured, photo'
      },
      {
        name: 'Orphism',
        prompt: 'orphism style {prompt} . pure color, abstract, musical, detailed',
        negative: 'mixed color, realistic, non-musical, low detail'
      },
      {
        name: 'Pastel',
        prompt: 'pastel drawing of {prompt} . soft, colorful, delicate, expressive, textured',
        negative: 'sharp, bold, clean, precise, digital'
      },
      {
        name: 'Pencil Drawing',
        prompt:
          'pencil drawing of {prompt} . intricate details, high contrast pencil lines, dynamic lighting and shadow, realistic',
        negative: ''
      },
      {
        name: 'Photographic',
        prompt:
          'cinematic photo {prompt} . 35mm photograph, film, bokeh, professional, 4k, highly detailed',
        negative:
          'drawing, painting, crayon, sketch, graphite, impressionist, noisy, blurry, soft, deformed, ugly'
      },
      {
        name: 'Photorealistic',
        prompt: 'photorealistic {prompt} . highly detailed, lifelike, precise, accurate',
        negative: 'abstract, low detail, unrealistic, inaccurate'
      },
      {
        name: 'Photorealistic graffiti',
        prompt: 'photorealistic graffiti style {prompt} . urban, street art, lifelike, detailed',
        negative: 'rural, gallery art, abstract, low detail'
      },
      {
        name: 'Pixel Art',
        prompt: 'pixel-art {prompt} . low-res, blocky, pixel art style, 8-bit graphics',
        negative: 'sloppy, messy, blurry, noisy, highly detailed, ultra textured, photo, realistic'
      },
      {
        name: 'Pixelated',
        prompt: 'pixelated style {prompt} . retro, low-res, digital, blocky',
        negative: 'modern, high-res, organic, smooth'
      },
      {
        name: 'Plein Air',
        prompt:
          'plein air painting of {prompt} . outdoor, natural light, vibrant, loose, expressive',
        negative: 'studio, artificial, precise, tight, clean, photorealistic'
      },
      {
        name: 'Pointillism',
        prompt: 'pointillism art {prompt} . dots, dappled, stipples, highly detailed',
        negative: 'smooth, blurry, photo-realistic, non-dotted'
      },
      {
        name: 'Pop Art',
        prompt: 'pop art {prompt} . vibrant, mass culture, comic style, bold lines, ironic',
        negative: 'soft, elegant, high culture, realistic, subtle lines'
      },
      {
        name: 'Post-internet',
        prompt: 'post-internet style {prompt} . digital culture, technology, online, detailed',
        negative: 'pre-internet, nature, offline, low detail'
      },
      {
        name: 'Primitive',
        prompt: 'primitive style {prompt} . raw, simple, naive, highly detailed',
        negative: 'refined, complex, sophisticated, low detail'
      },
      {
        name: 'Process Art',
        prompt: 'process art style {prompt} . creation focused, ephemeral, documentation, detailed',
        negative: 'result focused, permanent, no documentation, low detail'
      },
      {
        name: 'Psychedelic',
        prompt: 'psychedelic style {prompt} . vibrant, abstract, distorted, highly detailed',
        negative: 'muted, realistic, undistorted, low detail'
      },
      {
        name: 'Realism',
        prompt: 'realism style {prompt} . lifelike, detailed, accurate, representational',
        negative: 'abstract, simplistic, inaccurate, non-representational'
      },
      {
        name: 'Renaissance',
        prompt: 'Renaissance style {prompt} . classical, humanistic, realistic, highly detailed',
        negative: 'modern, abstract, unrealistic, low detail'
      },
      {
        name: 'Retro',
        prompt: 'retro style {prompt} . vintage, nostalgic, old-fashioned, highly detailed',
        negative: 'modern, futuristic, forward-looking, low detail'
      },
      {
        name: 'Rococo',
        prompt: 'rococo style {prompt} . ornate, playful, romantic, pastel, highly detailed',
        negative: 'minimalistic, serious, unromantic, dark, low detail'
      },
      {
        name: 'Romantic',
        prompt: 'romantic style {prompt} . emotional, dramatic, nature-focused, detailed',
        negative: 'unemotional, flat, city-focused, low detail'
      },
      {
        name: 'Satirical',
        prompt: 'satirical style {prompt} . humorous, ironic, exaggerated, critical',
        negative: 'serious, literal, realistic, complimentary'
      },
      {
        name: 'Sci-Fi Concept',
        prompt: 'sci-fi concept art style {prompt} . unique, interesting',
        negative: ''
      },
      {
        name: 'Scratchboard',
        prompt:
          'scratchboard technique on {prompt} . contrast, engraved, black and white, detailed, dramatic',
        negative: 'colorful, soft, loose, blended, photorealistic'
      },
      {
        name: 'Shin Hanga',
        prompt: '{prompt} . in Shin Hanga style, eldritch',
        negative: ''
      },
      {
        name: 'Silhouette',
        prompt: 'silhouette style {prompt} . minimalist, monochrome, stark, high contrast',
        negative: 'detailed, multicolored, soft, low contrast'
      },
      {
        name: 'Silhouette',
        prompt: 'silhouette of {prompt} . high contrast, dramatic, simple, bold, graphic',
        negative: 'detailed, textured, colorful, light, photorealistic'
      },
      {
        name: 'Situationalist',
        prompt: 'situationalist style {prompt} . political, collage, detournement, detailed',
        negative: 'apolitical, single medium, straightforward, low detail'
      },
      {
        name: 'Solarpunk',
        prompt: 'solarpunk style {prompt} . epic scale, hyperdetailed',
        negative: ''
      },
      {
        name: 'Sound Art',
        prompt: 'sound art style {prompt} . auditory, abstract, non-visual, detailed',
        negative: 'visual, realistic, silent, low detail'
      },
      {
        name: 'Space Art',
        prompt:
          'galactic style {prompt} . nebula, constellation, cosmic, celestial, highly detailed, starry',
        negative: 'blurry, grainy, deformed, photo-realistic, low-contrast, terrestrial'
      },
      {
        name: 'Steampunk',
        prompt: 'steampunk style {prompt} . retro, mechanical, detailed, Victorian',
        negative: 'modern, digital, minimalist, contemporary'
      },
      {
        name: 'Stencil Art',
        prompt: 'stencil art of {prompt} . sharp edges, bold, graphic, street art style, vibrant',
        negative: 'soft, loose, organic, brushy, traditional'
      },
      {
        name: 'Stippling',
        prompt: 'stippled technique on {prompt} . dotted, texture, detailed, graphic, intricate',
        negative: 'smooth, solid, loose, brushy, blended'
      },
      {
        name: 'Street Art',
        prompt:
          'urban graffiti style {prompt} . vibrant, edgy, street art, underground, spray paint effect',
        negative: 'clean, minimalistic, soft, gentle, blurry, off-center'
      },
      {
        name: 'Structural Film',
        prompt: 'structural film style {prompt} . experimental, non-narrative, texture, detailed',
        negative: 'traditional, narrative, smooth, low detail'
      },
      {
        name: 'Suprematism',
        prompt: 'suprematism style {prompt} . geometric, abstract, limited color palette, detailed',
        negative: 'organic, realistic, broad color palette, low detail'
      },
      {
        name: 'Suprematist',
        prompt: 'suprematist style {prompt} . geometric, abstract, non-objective, simple',
        negative: 'organic, realistic, objective, complex'
      },
      {
        name: 'Surrealism',
        prompt:
          'surrealistic {prompt} . dreamlike, subconscious, bizarre, highly detailed, intricate, imaginative, illogical juxtaposition',
        negative: 'clear, realistic, boring, typical, straightforward, concrete, photographic'
      },
      {
        name: 'Surrealist',
        prompt: 'surrealist {prompt} . dream-like, bizarre, irrational, highly detailed',
        negative: 'realistic, mundane, rational, low detail'
      },
      {
        name: 'Symbolic',
        prompt:
          'symbolic style {prompt} . conceptual, representative, allegorical, highly detailed',
        negative: 'literal, non-representative, factual, low detail'
      },
      {
        name: 'Synthetism',
        prompt: 'synthetism style {prompt} . simplified, symbolic, bright colors, detailed',
        negative: 'complex, literal, muted colors, low detail'
      },
      {
        name: 'Tachisme',
        prompt: 'tachisme style {prompt} . gestural, abstract, spontaneous, detailed',
        negative: 'controlled, realistic, planned, low detail'
      },
      {
        name: 'Tenebrism',
        prompt: 'tenebrism style {prompt} . dark, dramatic illumination, high contrast, detailed',
        negative: 'light, flat lighting, low contrast, low detail'
      },
      {
        name: 'Texture',
        prompt: 'texture {prompt} top down close-up',
        negative: 'ugly, deformed, noisy, blurry'
      },
      {
        name: "Trompe L'oeil",
        prompt:
          "trompe l'oeil style {prompt} . deceptive, optical illusion, 3D effect, realistic, highly detailed",
        negative: 'honest, 2D effect, unrealistic, low detail'
      },
      {
        name: 'UI/UX interface',
        prompt: '{prompt} . as a ui ux user interface, dribbble, graphic design',
        negative: 'photo, realistic, painting, drawing'
      },
      {
        name: 'Vaporwave',
        prompt: 'vaporwave style {prompt} . retro, neon, pixelated, nostalgic',
        negative: 'modern, monochrome, high-resolution, forward-looking'
      },
      {
        name: 'Victorian',
        prompt: 'Victorian style {prompt} . elegant, ornate, highly detailed, historical',
        negative: 'modern, minimalist, low detail, contemporary'
      },
      {
        name: 'Virtual realism',
        prompt: 'virtual realism style {prompt} . digital, lifelike, immersive, detailed',
        negative: 'analog, abstract, non-immersive, low detail'
      },
      {
        name: 'Vorticism',
        prompt: 'vorticism style {prompt} . geometric, abstract, dynamic, detailed',
        negative: 'organic, realistic, static, low detail'
      },
      {
        name: 'Watercolor',
        prompt: 'watercolor {prompt} . soft, blended, transparent, fluid',
        negative: 'hard, unblended, opaque, rigid'
      },
      {
        name: 'Wild Rainbow',
        prompt:
          '{prompt} . intricate, yellow green red, Scenic, Hyperdetailed, rainbow splash, symbolic, Bagshaw, Chevrier, Ferri, Kaluta, spinning, Pixiv, Mucha, Cina, Cinematic, Rutkowski, Artgerm, Giger, glowing fractal edges, cel-shaded',
        negative: ''
      },
      {
        name: 'Woodcut',
        prompt: 'woodcut style {prompt} . carved, bold lines, high contrast, rustic, handmade',
        negative: 'smooth, soft, delicate, digital, photorealistic'
      }
    ]
  },
  {
    name: 'Animation & Anime',
    styles: [
      {
        name: '2D Hand-Drawn Animation',
        prompt:
          'traditional 2D animation {prompt} . hand-drawn, frames, expressive, vibrant colors, highly detailed',
        negative: '3D, CG, stop-motion, photo-realistic, black and white'
      },
      {
        name: '3D Model',
        prompt:
          'professional 3d model {prompt} . octane render, highly detailed, volumetric, dramatic lighting',
        negative: 'ugly, deformed, noisy, low poly, blurry, painting'
      },
      {
        name: 'Abstract Animation',
        prompt:
          'abstract animation {prompt} . nonrepresentational, uses movement and color to create mood or emotion, highly detailed',
        negative: 'realistic, 3D, CG, anime, manga, black and white'
      },
      {
        name: 'Anime',
        prompt:
          'anime artwork {prompt} . anime style, key visual, vibrant, studio anime, highly detailed',
        negative: 'photo, deformed, black and white, realism, disfigured, low contrast'
      },
      {
        name: 'Anime (Mecha)',
        prompt:
          'Mecha {prompt} . Anime, robots, futuristic technologies, dynamic battles, detailed mechanical designs, highly detailed',
        negative: 'Disney, Pixar, cartoon, Looney Tunes, realism, fairy tales'
      },
      {
        name: 'Anime (Shojo)',
        prompt:
          'Shojo {prompt} . Manga, romantic themes, delicate art style, emotional narratives, highly detailed',
        negative: 'action, mecha, 3D, Pixar, black and white, barren'
      },
      {
        name: 'Anime (Shōnen)',
        prompt:
          'Shōnen {prompt} . Manga, action-packed, youthful characters, dynamic battles, inspiring themes, highly detailed',
        negative: 'Disney, Pixar, black and white, realism, romantic comedy'
      },
      {
        name: 'Anime Style Animation',
        prompt:
          'anime style animation {prompt} . Japanese style, hand-drawn or digital, vibrant, unique character designs, highly detailed',
        negative: 'western cartoons, 3D, CG, black and white'
      },
      {
        name: 'CGI Animation',
        prompt:
          'CGI animation {prompt} . 3D, photorealistic, high-quality textures and lighting, highly detailed',
        negative: '2D, stop-motion, anime, manga, black and white'
      },
      {
        name: 'Cartoon Modern',
        prompt:
          'cartoon modern {prompt} . mid-century modern aesthetic, stylized, geometric shapes, flat colors, highly detailed',
        negative: 'realistic, 3D, CG, anime, manga, black and white'
      },
      {
        name: 'Chibi Style Art',
        prompt:
          'chibi style {prompt} . Japanese, super-deformed, cute, exaggerated features, vibrant colors, highly detailed',
        negative: 'realistic, 3D, CG, western comics, black and white'
      },
      {
        name: 'Claymation',
        prompt:
          'claymation {prompt} . clay models, stop-motion, handcrafted, tactile, highly detailed',
        negative: '2D, 3D, CG, anime, manga, black and white'
      },
      {
        name: 'Cut-Out Animation',
        prompt:
          'cut-out animation {prompt} . paper or fabric cut-outs, stop-motion, handcrafted, highly detailed',
        negative: '2D, 3D, CG, anime, manga, black and white'
      },
      {
        name: 'Disney Classic',
        prompt:
          'Disney Classic {prompt} . Animation, fairy tales, musical numbers, expressive characters, bright colors, detailed, professional',
        negative: 'manga, anime, black and white, sketchy, rough'
      },
      {
        name: 'Flash Animation',
        prompt:
          'flash animation {prompt} . digital, vector graphics, tweening, simple shapes, highly detailed',
        negative: 'stop-motion, claymation, 3D, CG, black and white'
      },
      {
        name: 'Graphic Novel Art',
        prompt:
          'graphic novel art {prompt} . detailed, expressive, ranges from black and white to full color, often more realistic than traditional comics, highly detailed',
        negative: 'anime, manga, 3D, CG, western comics'
      },
      {
        name: 'Lowpoly',
        prompt:
          'low-poly style {prompt} . low-poly game art, polygon mesh, jagged, blocky, wireframe edges, centered composition',
        negative: 'noisy, sloppy, messy, grainy, highly detailed, ultra textured, photo'
      },
      {
        name: 'Manga Style Art',
        prompt:
          'manga style {prompt} . Japanese comics, black and white, unique character designs, detailed backgrounds, highly detailed',
        negative: 'western comics, 3D, CG, vibrant colors'
      },
      {
        name: 'Pixar',
        prompt:
          'Pixar {prompt} . 3D animation, heartwarming stories, photorealistic environments, appealing character designs, emotional depth, detailed, professional',
        negative: '2D, anime, manga, black and white, sketchy'
      },
      {
        name: 'Pixel Art Animation',
        prompt: 'pixel art animation {prompt} . low-res, blocky, digital, 8-bit, highly detailed',
        negative: 'stop-motion, claymation, 3D, CG, black and white'
      },
      {
        name: 'Rotoscope Animation',
        prompt:
          'rotoscope animation {prompt} . traced over live-action, realistic movement, highly detailed',
        negative: 'stop-motion, claymation, 3D, CG, black and white'
      },
      {
        name: 'Sand Animation',
        prompt:
          'sand animation {prompt} . sand manipulated on light box, fluid movement, highly detailed',
        negative: '2D, 3D, CG, anime, manga, black and white'
      },
      {
        name: 'Silhouette Animation',
        prompt:
          'silhouette animation {prompt} . black figures against light background, dramatic, based on shadow puppetry, highly detailed',
        negative: 'colorful, 3D, CG, anime, manga, black and white'
      },
      {
        name: 'Stop-Motion Animation',
        prompt:
          'stop-motion animation {prompt} . physical models, frame-by-frame, quirky, distinctive, highly detailed',
        negative: '2D, 3D, CG, anime, manga, black and white'
      },
      {
        name: 'Studio Ghibli',
        prompt:
          'Studio Ghibli {prompt} . Anime, magical realism, environmental themes, unique characters, breathtaking landscapes, highly detailed',
        negative: 'cartoon, slapstick, black and white, photo-realistic, barren'
      },
      {
        name: 'Superflat',
        prompt:
          'superflat {prompt} . Japanese, postmodern art, flat planes of color, manga and anime influences, highly detailed',
        negative: '3D, CG, western art styles, black and white'
      },
      {
        name: 'Vector Animation',
        prompt:
          'vector animation {prompt} . digital, clean lines, geometric shapes, bold colors, highly detailed',
        negative: 'stop-motion, claymation, 3D, CG, black and white'
      },
      {
        name: 'Western Comics Art',
        prompt:
          'western comics art {prompt} . bold lines, dynamic poses, vibrant colors, dramatic lighting, highly detailed',
        negative: 'anime, manga, 3D, CG, black and white'
      }
    ]
  },
  {
    name: 'Photography',
    styles: [
      {
        name: 'Action-packed Photo',
        prompt:
          'action-packed shot of {prompt}. 200mm lens, f/2.8, high shutter speed, capture the peak moment',
        negative: 'motion blur, underexposed, out of focus, distracting background, unsteady shot'
      },
      {
        name: 'Aerial Photo',
        prompt: 'aerial shot of {prompt}. Birds-eye view, grand, adventurous, stunning',
        negative: 'ground level, confined, cautious, underwhelming'
      },
      {
        name: 'Analog Film',
        prompt:
          'analog film photo {prompt} . faded film, desaturated, 35mm photo, grainy, vignette, vintage, Kodachrome, Lomography, stained, highly detailed, found footage',
        negative:
          'painting, drawing, illustration, glitch, deformed, mutated, cross-eyed, ugly, disfigured'
      },
      {
        name: 'Backlit Photo',
        prompt: 'backlit photo of {prompt}. Silhouette, dramatic, artistic, shadowy',
        negative: 'frontlit, flat, unartistic, clear'
      },
      {
        name: 'Blue Hour Photo',
        prompt: 'blue hour shot of {prompt}. Cool light, twilight, peaceful, moody',
        negative: 'midday, harsh light, chaotic, flat'
      },
      {
        name: 'Candid Photo',
        prompt: 'candid shot of {prompt}. 50mm lens, f/2.8, spontaneous, unposed',
        negative: 'poor lighting, motion blur, out of focus, distracting background, overprocessed'
      },
      {
        name: 'Catalog Photo',
        prompt:
          'catalog shot of {prompt}. 70mm lens, f/5.6, neutral background, clear focus on attire',
        negative:
          'poor lighting, unflattering angles, distorted perspective, underexposed, oversaturated'
      },
      {
        name: 'Charismatic Photo',
        prompt: '{prompt} with charisma. 50mm lens, f/2.8, focused on eyes, natural lighting',
        negative: 'overexposed, underexposed, blurry, distorted, overprocessed'
      },
      {
        name: 'Cinematic Photo',
        prompt:
          'cinematic portrait of {prompt}. 85mm lens, f/1.8, dramatic side lighting, moody atmosphere',
        negative: 'overblown highlights, noisy, grainy, oversaturated, wide-angle distortion'
      },
      {
        name: 'Cityscape Photo',
        prompt: 'cityscape shot of {prompt}. Urban, skyline, architectural, dynamic',
        negative: 'rural, landscape, natural, static'
      },
      {
        name: 'Documentary Photo',
        prompt:
          'documentary style of {prompt}. 35mm lens, f/5.6, truthful representation, neutral perspective',
        negative: 'overexposed, underexposed, oversaturated, motion blur, unsteady shot'
      },
      {
        name: 'Dramatic Photo',
        prompt:
          'dramatic still life of {prompt}. 85mm lens, f/2.2, dramatic lighting, intense colors',
        negative: 'flat lighting, blurry, underexposed, distracting elements, oversaturated'
      },
      {
        name: 'Editorial Photo',
        prompt:
          'editorial fashion shot of {prompt}. 50mm lens, f/2.5, storytelling, focused on outfit',
        negative: 'unflattering pose, poor lighting, blurry, distracting elements, overexposed'
      },
      {
        name: 'Emotional Photo',
        prompt:
          'emotional moment in {prompt}. 135mm lens, f/4, capture expressions, ambient lighting',
        negative: 'poor focus, high ISO noise, unsteady shot, underexposed, distorted colors'
      },
      {
        name: 'Environmental Photo',
        prompt:
          'environmental portrait of {prompt}. 35mm lens, f/4, wider context, natural surroundings',
        negative: 'cluttered background, poor lighting, overexposed, underexposed, unsharp'
      },
      {
        name: 'Golden Hour Photo',
        prompt: 'golden hour shot of {prompt}. Warm light, sunset/sunrise, magical, serene',
        negative: 'midday, harsh light, mundane, agitated'
      },
      {
        name: 'Haute Couture Photo',
        prompt:
          'haute couture display of {prompt}. 85mm lens, f/2.2, vibrant colors, dramatic lighting',
        negative:
          'flat lighting, out of focus, distracting background, overprocessed, oversaturated'
      },
      {
        name: 'Historical Photo',
        prompt:
          'historical capture of {prompt}. 24mm lens, f/8, capture architectural details, natural lighting',
        negative: 'distorted perspective, underexposed, overprocessed, unsharp, oversaturated'
      },
      {
        name: 'Investigative Photo',
        prompt: 'investigative shot of {prompt}. 24mm lens, f/4, informative, intriguing',
        negative:
          'blurry, underexposed, distorted perspective, high ISO noise, distracting elements'
      },
      {
        name: 'Landscape Photo',
        prompt: 'landscape shot of {prompt}. Scenic, outdoors, grand, beautiful',
        negative: 'indoor, close-up, confined, unattractive'
      },
      {
        name: 'Lifestyle Photo',
        prompt: 'lifestyle capture of {prompt}. 50mm lens, f/2.8, candid, vibrant colors',
        negative: 'poor lighting, overprocessed, distracting background, motion blur, unsteady shot'
      },
      {
        name: 'Macro Photo',
        prompt: 'macro shot of {prompt}. Extremely close-up, detailed, intricate, revealing',
        negative: 'wide shot, undetailed, simple, concealing'
      },
      {
        name: 'Minimalistic Photo',
        prompt:
          'minimalistic composition of {prompt}. 50mm lens, f/5.6, simplistic design, neutral colors',
        negative: 'cluttered, oversaturated, unbalanced composition, poor lighting, overexposed'
      },
      {
        name: 'Modernist Photo',
        prompt: 'modernist view of {prompt}. 18mm lens, f/4, minimalistic, strong lines',
        negative: 'barrel distortion, overexposed, blurry, poor composition, flat colors'
      },
      {
        name: 'Narrative Photo',
        prompt: 'narrative image of {prompt}. 50mm lens, f/3.5, storytelling, context setting',
        negative:
          'unfocused, poor lighting, cluttered composition, overexposed, distorted perspective'
      },
      {
        name: 'Night Photo',
        prompt: 'night shot of {prompt}. Dark, lit, moody, mysterious',
        negative: 'daytime, bright, cheerful, clear'
      },
      {
        name: 'Opinion Photo',
        prompt: 'opinion image of {prompt}. 35mm lens, f/5.6, emotive, storytelling',
        negative:
          'poor focus, underexposed, cluttered composition, overexposed highlights, distorted colors'
      },
      {
        name: 'Overhead Photo',
        prompt: 'overhead shot of {prompt}. Top-down view, unique perspective, revealing',
        negative: 'low angle, ordinary perspective, concealing'
      },
      {
        name: 'Product Shot',
        prompt:
          'product shot of {prompt} . striking, muted colors, soft lighting, softbox, depth of field',
        negative: ''
      },
      {
        name: 'Reflection Photo',
        prompt: 'reflection shot of {prompt}. Mirror image, symmetry, creative, thoughtful',
        negative: 'direct, asymmetrical, uncreative, thoughtless'
      },
      {
        name: 'Reportage Photo',
        prompt:
          'gripping reportage of {prompt}. Wide-angle lens, f/8, focus on action, capture the moment',
        negative:
          'blurred action, low light noise, unsteady shot, out of focus, distorted perspective'
      },
      {
        name: 'Rustic Photo',
        prompt: 'rustic presentation of {prompt}. 35mm lens, f/4, natural elements, warm tones',
        negative: 'poor focus, overexposed, cluttered, cold colors, unbalanced composition'
      },
      {
        name: 'Surreal Photo',
        prompt:
          'surreal perspective of {prompt}. Fisheye lens, f/2.8, abstract interpretation, vibrant colors',
        negative: 'unfocused, poor lighting, underexposed, overprocessed, distracting elements'
      }
    ]
  },
  {
    name: 'People & Portraits',
    styles: [
      {
        name: 'Action',
        prompt: 'action shot of {prompt}. Movement, energy, dynamic, intense',
        negative: 'still, calm, static, gentle'
      },
      {
        name: 'Activewear',
        prompt: '{prompt} in stylish activewear. Sporty, comfortable, functional, athleisure',
        negative: 'evening wear, formal, preppy, boho'
      },
      {
        name: 'Artistic',
        prompt: '{prompt} in an artistic outfit. Creative, unique, expressive, handmade',
        negative: 'preppy, conservative, business, traditional'
      },
      {
        name: 'Athletic',
        prompt: '{prompt} in athletic wear. Sporty, gym-ready, functional, sneakers, activewear',
        negative: 'evening wear, formal, business, relaxed'
      },
      {
        name: 'Athletic',
        prompt: 'athletic shot of {prompt}. Sportswear, action, energy, strength',
        negative: 'leisure, inactive, weak, non-sporty'
      },
      {
        name: 'Beach',
        prompt: 'beach photo of {prompt}. Swimwear, sand, ocean, relaxed',
        negative: 'urban, winter, formal, stressed'
      },
      {
        name: 'Beachwear',
        prompt: '{prompt} in beachwear. Bikinis, cover-ups, sandals, straw hats, light fabrics',
        negative: 'winter wear, formal, business, structured'
      },
      {
        name: 'Black and White',
        prompt: 'black and white photo of {prompt}. Monochrome, timeless, artistic, dramatic',
        negative: 'color, vibrant, modern, digital'
      },
      {
        name: 'Bohemian',
        prompt:
          '{prompt} in boho fashion. Free-spirited, layered, patterns, ethnic-inspired, fringe',
        negative: 'minimalist, structured, monochromatic, sleek'
      },
      {
        name: 'Business',
        prompt: 'business photo of {prompt}. Professional attire, workplace setting, confident',
        negative: 'casual, relaxed, non-work, insecure'
      },
      {
        name: 'Business Casual',
        prompt: '{prompt} dressed in business casual. Semi-formal, tailored, smart, professional',
        negative: 'sporty, casual, grunge, punk'
      },
      {
        name: 'Candid',
        prompt:
          '{prompt} captured in a candid moment. Unposed, natural, spontaneous, real-life situation',
        negative: 'posed, artificial, studio shot, planned'
      },
      {
        name: 'Casual-Chic',
        prompt: '{prompt} in a casual chic outfit. Comfortable, stylish, modern, accessible',
        negative: 'formal, high fashion, flamboyant, extravagant'
      },
      {
        name: 'Close-up',
        prompt: 'close-up photo of {prompt}. Detailed, intimate, clear, personal',
        negative: 'wide shot, distant, blurry, impersonal'
      },
      {
        name: 'Country',
        prompt: '{prompt} sporting country style. Western, cowboy boots, plaid, denim',
        negative: 'gothic, punk, high fashion, glamorous'
      },
      {
        name: 'Dance',
        prompt: 'dance photo of {prompt}. Movement, grace, energy, rhythm',
        negative: 'static, clumsy, lethargic, off-beat'
      },
      {
        name: 'Eccentric',
        prompt: '{prompt} in an eccentric ensemble. Unique, quirky, stand-out, individualistic',
        negative: 'traditional, classic, conservative, minimalist'
      },
      {
        name: 'Editorial',
        prompt: 'editorial shot of {prompt}. Fashion-forward, styled, professional, magazine-ready',
        negative: 'casual, candid, unstyled, amateur'
      },
      {
        name: 'Ethical',
        prompt:
          '{prompt} wearing ethical fashion. Sustainable, fair trade, organic materials, eco-friendly',
        negative: 'fast fashion, synthetic, mass-produced, cheap'
      },
      {
        name: 'Fashion',
        prompt: 'fashion shot of {prompt}. Trendy outfit, styled, runway-ready, chic',
        negative: 'plain, unstyled, out of style, ordinary'
      },
      {
        name: 'Formal',
        prompt: '{prompt} dressed in formal wear. Black tie, tuxedo, evening gown, polished',
        negative: 'casual, sporty, grunge, beachwear'
      },
      {
        name: 'Futuristic',
        prompt: '{prompt} in futuristic fashion. Metallic, geometric, avant-garde, high-tech',
        negative: 'vintage, classic, traditional, retro'
      },
      {
        name: 'Glamorous',
        prompt: '{prompt} looking glamorous. Luxury, sequins, fur, red carpet ready',
        negative: 'casual, relaxed, sporty, minimalist'
      },
      {
        name: 'Glamour',
        prompt: 'glamour shot of {prompt}. Beauty focused, make-up, lighting, seductive',
        negative: 'natural, minimal, candid, unglamorous'
      },
      {
        name: 'Gothic',
        prompt: '{prompt} in a gothic getup. Dark, leather, lace, Victorian influence',
        negative: 'preppy, pastel, boho, bright'
      },
      {
        name: 'Grunge',
        prompt: "{prompt} sporting a grunge look. '90s influence, flannel, band tees, distressed",
        negative: 'preppy, glamorous, feminine, tailored'
      },
      {
        name: 'Harajuku',
        prompt: '{prompt} in Harajuku style. Japanese street fashion, eclectic, colorful, anime',
        negative: 'conservative, preppy, minimalist, business'
      },
      {
        name: 'Headshot',
        prompt: 'headshot of {prompt}. Professional, clear, neutral background, focused',
        negative: 'full body, casual, distracting background, unfocused'
      },
      {
        name: 'High-Fashion',
        prompt: '{prompt} in haute couture. Luxury, designer brands, runway-ready, tailored, chic',
        negative: 'casual, sporty, laid-back, street style, loose'
      },
      {
        name: 'Hippy',
        prompt: "{prompt} in hippy style. '70s influence, tie-dye, bell-bottoms, fringe",
        negative: 'preppy, conservative, formal, modern'
      },
      {
        name: 'Hipster',
        prompt: '{prompt} in a hipster outfit. Eclectic, indie, non-mainstream, vintage',
        negative: 'mainstream, sporty, glamorous, preppy'
      },
      {
        name: 'Kawaii',
        prompt: '{prompt} in Kawaii style. Cute, pastel, girly, anime-inspired, frilly',
        negative: 'gothic, punk, grunge, minimalist'
      },
      {
        name: 'Lifestyle',
        prompt: 'lifestyle photo of {prompt}. Everyday activities, real-life situations, relatable',
        negative: 'fantasy, staged, surreal, unrealistic'
      },
      {
        name: 'Lolita',
        prompt: '{prompt} in a Lolita ensemble. Victorian-inspired, frilly, bows, lace, layered',
        negative: 'minimalist, sporty, casual, business'
      },
      {
        name: 'Low Light',
        prompt: 'low light photo of {prompt}. Ambient, moody, dramatic, shadowy',
        negative: 'bright, cheerful, flat, clear'
      },
      {
        name: 'Military',
        prompt: '{prompt} wearing military-inspired fashion. Camouflage, khaki, structured, badges',
        negative: 'boho, glamorous, preppy, beachwear'
      },
      {
        name: 'Minimalist',
        prompt:
          '{prompt} sporting minimalist fashion. Simple, clean lines, neutral colors, unfussy',
        negative: 'vintage, boho, flamboyant, colorful'
      },
      {
        name: 'Mod',
        prompt: "{prompt} dressed in Mod style. '60s influence, A-line, geometric patterns, bold",
        negative: 'boho, grunge, minimalist, normcore'
      },
      {
        name: 'Monochromatic',
        prompt: '{prompt} in a monochromatic look. Single color, sleek, modern, minimalist',
        negative: 'colorful, vibrant, patterned, boho'
      },
      {
        name: 'Music',
        prompt:
          'music-related shot of {prompt}. Playing an instrument, singing, energetic, passionate',
        negative: 'quiet, uninterested, uninvolved, lackluster'
      },
      {
        name: 'Nature',
        prompt: 'nature shot with {prompt}. Outdoors, greenery, natural light, fresh',
        negative: 'indoor, city, artificial light, stale'
      },
      {
        name: 'Nautical',
        prompt: '{prompt} in a nautical outfit. Sailor-inspired, stripes, navy, white, red',
        negative: 'gothic, punk, grunge, boho'
      },
      {
        name: 'Normcore',
        prompt: '{prompt} dressed in normcore. Unpretentious, casual, basics, comfortable',
        negative: 'high fashion, glamorous, punk, gothic'
      },
      {
        name: 'Portrait',
        prompt: 'portrait shot of {prompt}. Close-up, eyes on camera, clear, sharp',
        negative: 'wide shot, landscape, blurred, candid'
      },
      {
        name: 'Preppy',
        prompt: '{prompt} dressed in preppy style. Collegiate, clean-cut, conservative, layered',
        negative: 'gothic, punk, casual, relaxed'
      },
      {
        name: 'Punk',
        prompt: '{prompt} with a punk look. Rebellious, grungy, band tees, ripped denim',
        negative: 'preppy, classic, conservative, formal'
      },
      {
        name: 'Rave',
        prompt: '{prompt} in rave wear. Bright colors, neon, sequins, fur',
        negative: 'business casual, preppy, conservative, minimalist'
      },
      {
        name: 'Rocker',
        prompt: '{prompt} rocking the rock style. Leather, band tees, edgy, black',
        negative: 'preppy, pastel, boho, cute'
      },
      {
        name: 'Silhouette',
        prompt: 'silhouette photo of {prompt}. Dramatic, backlighting, mysterious, creative',
        negative: 'frontlit, clear, detailed, revealing'
      },
      {
        name: 'Skater',
        prompt: '{prompt} rocking skater style. Casual, sneakers, baggy, sporty, laid-back',
        negative: 'formal, glamorous, high fashion, preppy'
      },
      {
        name: 'Street',
        prompt: 'street shot of {prompt}. Urban, casual, candid, trendy',
        negative: 'rural, formal, posed, traditional'
      },
      {
        name: 'Streetwear',
        prompt:
          '{prompt} rocking the streetwear trend. Urban, hip-hop influence, sneakers, caps, oversized',
        negative: 'preppy, conservative, formal, traditional'
      },
      {
        name: 'Studio',
        prompt: 'studio shot of {prompt}. Controlled lighting, plain background, clear',
        negative: 'outdoor, natural light, busy background, unclear'
      },
      {
        name: 'Sustainable',
        prompt:
          '{prompt} in sustainable fashion. Eco-friendly, organic, recycled materials, fair trade',
        negative: 'fast fashion, synthetic, cheap, disposable'
      },
      {
        name: 'Tailored',
        prompt: '{prompt} in a tailored suit. Formal, professional, sleek, well-fitted',
        negative: 'casual, relaxed, oversized, loose'
      },
      {
        name: 'Traditional',
        prompt: '{prompt} in a traditional outfit. Ethnic, regional, cultural, heritage',
        negative: 'modern, futuristic, western, mainstream'
      },
      {
        name: 'Underwater',
        prompt: 'underwater photo of {prompt}. Aquatic, serene, dreamlike, floaty',
        negative: 'land, hectic, realistic, heavy'
      },
      {
        name: 'Vintage',
        prompt: '{prompt} in a vintage ensemble. Retro, nostalgia, classic styles, second-hand',
        negative: 'modern, futuristic, minimalist, new'
      },
      {
        name: 'Vintage',
        prompt: 'vintage style photo of {prompt}. Retro, nostalgic, old-fashioned, timeless',
        negative: 'modern, futuristic, trendy, transient'
      }
    ]
  },
  {
    name: "Artists' Styles",
    styles: [
      {
        name: 'Agnes Martin',
        prompt: 'Agnes Martin style {prompt} . Minimalist, geometric, grid, subtle',
        negative: 'Baroque, organic, floral, bold'
      },
      {
        name: 'Ai Weiwei',
        prompt:
          'Ai Weiwei style {prompt} . Conceptual, political, traditional Chinese materials, large-scale',
        negative: 'apolitical, contemporary, small-scale, western materials'
      },
      {
        name: 'Alexander Calder',
        prompt: 'Alexander Calder style {prompt} . Kinetic, mobile, primary colors, balanced',
        negative: 'Static, statue, pastel colors, unbalanced'
      },
      {
        name: 'Andy Goldsworthy',
        prompt:
          'Andy Goldsworthy style {prompt} . Environmental art, natural materials, temporary, site-specific',
        negative: 'urban art, man-made materials, permanent, unspecific site'
      },
      {
        name: 'Anish Kapoor',
        prompt: 'Anish Kapoor style {prompt} . Abstract, large-scale, reflective, curved',
        negative: 'figurative, small-scale, matte, straight lines'
      },
      {
        name: 'Ansel Adams',
        prompt: 'Ansel Adams style {prompt} . Black and white, nature, high contrast, detailed',
        negative: 'color, urban, low contrast, vague'
      },
      {
        name: 'Anselm Kiefer',
        prompt:
          'Anselm Kiefer style {prompt} . Neo-expressionist, monumental, textured, historical',
        negative: 'Minimalist, small-scale, smooth, futuristic'
      },
      {
        name: 'Antony Gormley',
        prompt:
          'Antony Gormley style {prompt} . Sculpture, human form, rusted, site-specific, public art',
        negative: 'painting, abstract, polished, gallery-based'
      },
      {
        name: 'Artemisia Gentileschi',
        prompt:
          'Artemisia Gentileschi style {prompt} . Baroque, dramatic, biblical, female-centric',
        negative: 'Rococo, calm, mythological, male-centric'
      },
      {
        name: 'Banksy',
        prompt: 'Banksy style {prompt} . Street art, satirical, stenciled, urban',
        negative: 'classic, traditional, indoor, realism'
      },
      {
        name: 'Barbara Kruger',
        prompt: 'Barbara Kruger style {prompt} . Conceptual, text, black and white, feminist',
        negative: 'Impressionist, image, color, patriarchal'
      },
      {
        name: 'Barnett Newman',
        prompt:
          'Barnett Newman style {prompt} . Abstract expressionism, zip, large-scale, color field',
        negative: 'Pop art, pattern, small-scale, comic strip'
      },
      {
        name: 'Basquiat',
        prompt:
          'Basquiat style {prompt} . Neo-expressionist, primitive, graffiti, social commentary',
        negative: 'polished, elegant, subdued, subtle'
      },
      {
        name: 'Berthe Morisot',
        prompt: 'Berthe Morisot style {prompt} . Impressionist, feminine, domestic, light',
        negative: 'Surrealist, masculine, public, dark'
      },
      {
        name: 'Botticelli',
        prompt: 'Botticelli style {prompt} . Early Renaissance, allegorical, graceful, detailed',
        negative: 'abstract, harsh, simplified, rough'
      },
      {
        name: 'Bridget Riley',
        prompt:
          'Bridget Riley style {prompt} . Op art, geometric, black and white, optical illusion',
        negative: 'organic, color, realistic, straightforward'
      },
      {
        name: 'Canaletto',
        prompt: '{prompt} . in the style of Canaletto, matte painting',
        negative: ''
      },
      {
        name: 'Caravaggio',
        prompt: 'Caravaggio style {prompt} . Baroque, chiaroscuro, dramatic, realistic',
        negative: 'soft lighting, calm, abstract, idealized'
      },
      {
        name: 'Carl Andre',
        prompt: 'Carl Andre style {prompt} . Minimalist, geometric, industrial, ground-level',
        negative: 'Baroque, organic, handcrafted, elevated'
      },
      {
        name: 'Caspar David Friedrich',
        prompt: 'landscape painting of {prompt} . in the style of Caspar David Friedrich',
        negative: ''
      },
      {
        name: 'Chagall',
        prompt: 'Chagall style {prompt} . Surrealist, dreamy, vibrant, narrative',
        negative: 'realistic, dull, serious, minimal'
      },
      {
        name: 'Chris Ofili',
        prompt: 'Chris Ofili style {prompt} . YBA, mixed-media, elephant dung, decorative',
        negative: 'Minimalism, single-media, clean, austere'
      },
      {
        name: 'Christo and Jeanne-Claude',
        prompt:
          'Christo and Jeanne-Claude style {prompt} . Installation, environmental, fabric, temporal',
        negative: 'Still Life, indoor, metal, permanent'
      },
      {
        name: 'Chuck Close',
        prompt: 'Chuck Close style {prompt} . Photorealism, portrait, large-scale, gridded',
        negative: 'Impressionism, landscape, small-scale, loose'
      },
      {
        name: 'Cindy Sherman',
        prompt:
          'Cindy Sherman style {prompt} . Conceptual, self-portrait, character study, cinematic',
        negative: 'landscape, group portraits, candid, documentary'
      },
      {
        name: 'Claude Monet',
        prompt: 'Claude Monet style {prompt} . Impressionist, outdoor, light, loose brushwork',
        negative: 'neoclassical, indoor, dark, tight brushwork'
      },
      {
        name: 'Constantin Brâncuși',
        prompt: 'Constantin Brâncuși style {prompt} . Modernist, abstract, bronze, streamlined',
        negative: 'traditional, figurative, wood, complex'
      },
      {
        name: 'Cézanne',
        prompt: 'Cézanne style {prompt} . Post-impressionist, geometric, detailed, brushstrokes',
        negative: 'smooth, flat, loose, fluid'
      },
      {
        name: 'Da Vinci',
        prompt: 'Da Vinci style {prompt} . Realistic, sfumato, detailed, chiaroscuro',
        negative: 'abstract, vibrant colors, bold, loose brushwork'
      },
      {
        name: 'Dali',
        prompt: 'Dali style {prompt} . Surrealist, dreamlike, bizarre, symbolic',
        negative: 'realistic, ordinary, rational, clear, obvious'
      },
      {
        name: 'Damien Hirst',
        prompt:
          'Damien Hirst style {prompt} . Contemporary, controversial, conceptual, large scale installation',
        negative: 'classical, calming, handcrafted, small scale'
      },
      {
        name: 'Dan Flavin',
        prompt: 'Dan Flavin style {prompt} . Minimalist, light, fluorescent, site-specific',
        negative: 'Baroque, dark, oil, gallery-specific'
      },
      {
        name: 'Dan Mumford',
        prompt: '{prompt} . in the style of Dan Mumford, dark fantasy art',
        negative: ''
      },
      {
        name: 'Dante Gabriel Rossetti',
        prompt:
          'Dante Gabriel Rossetti style {prompt} . Pre-Raphaelite, medieval, literary, romantic',
        negative: 'Futurist, modern, abstract, stark'
      },
      {
        name: 'David Hockney',
        prompt: 'David Hockney style {prompt} . Pop art, landscape, vibrant, digital',
        negative: 'Abstract Expressionism, figure, subdued, traditional'
      },
      {
        name: 'Diego Rivera',
        prompt:
          'Diego Rivera style {prompt} . Muralist, social realist, Mexican culture, narrative',
        negative: 'miniature, abstract, foreign, non-narrative'
      },
      {
        name: 'Édouard Manet',
        prompt:
          'Édouard Manet style {prompt} . Realist, modern life, loose brushwork, controversial',
        negative: 'Romantic, history, fine brushwork, conventional'
      },
      {
        name: 'Edvard Munch',
        prompt:
          'Edvard Munch style {prompt} . Expressionist, psychological, bold colors, distorted',
        negative: 'Impressionist, physical, muted colors, proportional'
      },
      {
        name: 'Edward Hopper',
        prompt:
          'Edward Hopper style {prompt} . Realistic, isolation, architectural, strong contrast',
        negative: 'crowded, organic, soft lighting, abstract'
      },
      {
        name: 'Edward Weston',
        prompt: 'Edward Weston style {prompt} . Photography, black and white, still life, detailed',
        negative: 'Painting, color, action, abstract'
      },
      {
        name: 'Egon Schiele',
        prompt: 'Egon Schiele style {prompt} . Expressionist, figure, distorted, emotional',
        negative: 'Impressionist, landscape, proportional, detached'
      },
      {
        name: 'El Greco',
        prompt: 'El Greco style {prompt} . Mannerist, religious, elongated, dramatic',
        negative: 'Renaissance, secular, proportional, calm'
      },
      {
        name: 'Ellsworth Kelly',
        prompt:
          'Ellsworth Kelly style {prompt} . Hard-edge painting, color field, minimalist, geometric',
        negative: 'Impressionism, detailed, ornate, organic'
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
        name: 'Faith Ringgold',
        prompt: 'Faith Ringgold style {prompt} . Contemporary, quilt, narrative, feminist',
        negative: 'Abstract, sculpture, non-narrative, masculine'
      },
      {
        name: 'Fernand Léger',
        prompt: 'Fernand Léger style {prompt} . Cubist, mechanical, mural, bold colors',
        negative: 'Surrealist, organic, small-scale, muted colors'
      },
      {
        name: 'Francis Bacon',
        prompt: 'Francis Bacon style {prompt} . Existential, distorted, unsettling, expressive',
        negative: 'comforting, realistic, calm, subdued'
      },
      {
        name: 'Francis Picabia',
        prompt: 'Francis Picabia style {prompt} . Dada, machine, painting, provocative',
        negative: 'Impressionism, nature, sketch, pleasant'
      },
      {
        name: 'Frank Stella',
        prompt:
          'Frank Stella style {prompt} . Minimalist, geometric, large scale, non-representational',
        negative: 'maximalist, organic, small scale, representational'
      },
      {
        name: 'Frida Kahlo',
        prompt: 'Frida Kahlo style {prompt} . Symbolic, surrealistic, emotional, vibrant',
        negative: 'realistic, subdued, impersonal, monochromatic'
      },
      {
        name: 'Georges Braque',
        prompt: 'Georges Braque style {prompt} . Cubist, abstract, collage, muted colors',
        negative: 'Romantic, realistic, oil painting, vibrant colors'
      },
      {
        name: "Georgia O'Keeffe",
        prompt: "Georgia O'Keeffe style {prompt} . Modernist, flowers, close-up, sensual",
        negative: 'Cubist, objects, far-off, detached'
      },
      {
        name: 'Gerhard Richter',
        prompt: 'Gerhard Richter style {prompt} . Abstract, textured, layered, scraped',
        negative: 'realistic, smooth, single-layer, detailed'
      },
      {
        name: 'Gilbert & George',
        prompt:
          'Gilbert & George style {prompt} . Contemporary, photographic, duo, confrontational',
        negative: 'Traditional, painted, individual, pleasant'
      },
      {
        name: 'Giuseppe Arcimboldo',
        prompt: 'Giuseppe Arcimboldo style {prompt} . Mannerist, portrait, food, symbolic',
        negative: 'Cubist, landscape, abstract, literal'
      },
      {
        name: 'Grant Wood',
        prompt: 'Grant Wood style {prompt} . Regionalist, rural, detailed, Americana',
        negative: 'urban, abstract, vague, non-American'
      },
      {
        name: 'Grayson Perry',
        prompt: 'Grayson Perry style {prompt} . Contemporary, ceramics, tapestry, narrative',
        negative: 'Old Masters, oil painting, canvas, non-narrative'
      },
      {
        name: 'Gustav Klimt',
        prompt: 'Gustav Klimt style {prompt} . Symbolist, decorative, golden, intricate',
        negative: 'realistic, functional, monochrome, simplified'
      },
      {
        name: 'Gustave Courbet',
        prompt:
          'Gustave Courbet style {prompt} . Realist, rural life, coarse brushwork, controversial',
        negative: 'Neoclassical, noble life, fine brushwork, conventional'
      },
      {
        name: 'H.R. Giger',
        prompt: 'H.R. Giger style {prompt} . Surrealist, biomechanical, airbrush, dark',
        negative: 'Impressionist, human, brush, light'
      },
      {
        name: 'Henri Cartier-Bresson',
        prompt:
          'Henri Cartier-Bresson style {prompt} . Photography, decisive moment, black and white, candid',
        negative: 'Painting, posed, color, staged'
      },
      {
        name: 'Henry Moore',
        prompt: 'Henry Moore style {prompt} . Modernist, abstract, organic, bronze, monumental',
        negative: 'realistic, geometric, miniature, pastel'
      },
      {
        name: 'Hieronymus Bosch',
        prompt: 'Hieronymus Bosch style {prompt} . Surrealist, detailed, religious, narrative',
        negative: 'realistic, abstract, secular, non-narrative'
      },
      {
        name: 'Hokusai',
        prompt: 'Hokusai style {prompt} . Ukiyo-e, woodblock print, detailed, narrative',
        negative: 'abstract, free-form, modern, minimal'
      },
      {
        name: 'Hopper',
        prompt: 'Hopper style {prompt} . Realistic, light and shadow, loneliness, American urban',
        negative: 'busy, crowded, vibrant, abstract'
      },
      {
        name: 'Jackson Pollock',
        prompt:
          'Jackson Pollock style {prompt} . Abstract expressionist, action painting, drip technique, energetic',
        negative: 'controlled, figurative, calm, small scale'
      },
      {
        name: 'James Turrell',
        prompt: 'James Turrell style {prompt} . Land art, light, immersive, perceptual',
        negative: 'Street art, dark, observational, intellectual'
      },
      {
        name: 'James Whistler',
        prompt: 'James Whistler style {prompt} . Tonalism, atmospheric, subdued, abstract',
        negative: 'Fauvism, vibrant, bold, detailed'
      },
      {
        name: 'Jean Arp',
        prompt: 'Jean Arp style {prompt} . Dada, abstract, biomorphic, sculpture',
        negative: 'Realism, figurative, geometric, painting'
      },
      {
        name: 'Jean Dubuffet',
        prompt: 'Jean Dubuffet style {prompt} . Art Brut, textured, primal, abstract',
        negative: 'Academic art, smooth, refined, realistic'
      },
      {
        name: 'Jean-Antoine Watteau',
        prompt: 'Jean-Antoine Watteau style {prompt} . Rococo, outdoor, elegant, lively',
        negative: 'Baroque, indoor, serious, static'
      },
      {
        name: 'Jean-Michel Basquiat',
        prompt:
          'Jean-Michel Basquiat style {prompt} . Neo-expressionist, graffiti influence, raw, socially critical',
        negative: 'classical, polished, refined, apolitical'
      },
      {
        name: 'Jeff Koons',
        prompt: 'Jeff Koons style {prompt} . Contemporary, kitsch, glossy, large-scale',
        negative: 'traditional, serious, matte, small-scale'
      },
      {
        name: 'Jenny Holzer',
        prompt: 'Jenny Holzer style {prompt} . Conceptual, text-based, public, LED',
        negative: 'painting, image-based, private, canvas'
      },
      {
        name: 'Joan Miró',
        prompt: 'Joan Miró style {prompt} . Surrealist, abstract, biomorphic forms, primary colors',
        negative: 'realistic, figurative, complex, muted colors'
      },
      {
        name: 'Johannes Vermeer',
        prompt: 'Johannes Vermeer style {prompt} . Baroque, domestic, light, detailed',
        negative: 'Cubist, public, dark, abstract'
      },
      {
        name: 'John Singer Sargent',
        prompt: 'John Singer Sargent style {prompt} . Realistic, elegant, portrait, expressive',
        negative: 'abstract, casual, landscape, subdued'
      },
      {
        name: 'Joseph Beuys',
        prompt: 'Joseph Beuys style {prompt} . Fluxus, performance, social sculpture, felt',
        negative: 'Minimalism, painting, object, metal'
      },
      {
        name: 'Joseph Cornell',
        prompt: 'Joseph Cornell style {prompt} . Surrealist, box, found objects, nostalgic',
        negative: 'Minimalist, open space, new materials, contemporary'
      },
      {
        name: 'KAWS',
        prompt: 'KAWS style {prompt} . Pop art, vinyl toy, X eyes, cartoonish',
        negative: 'Conceptual, bronze statue, normal eyes, realistic'
      },
      {
        name: 'Katsushika Hokusai',
        prompt: 'Katsushika Hokusai style {prompt} . Ukiyo-e, nature, woodblock print, detailed',
        negative: 'western style, urban, oil painting, abstract'
      },
      {
        name: 'Kazimir Malevich',
        prompt: 'Kazimir Malevich style {prompt} . Suprematism, abstract, geometric, minimal',
        negative: 'realistic, organic, decorative, complex'
      },
      {
        name: 'Keith Haring',
        prompt:
          'Keith Haring style {prompt} . Pop art, bold lines, vibrant colors, social messages, active figures',
        negative: 'subtle, realistic, muted colors, personal'
      },
      {
        name: 'Kiki Smith',
        prompt: 'Kiki Smith style {prompt} . Feminist, body, sculpture, mythological',
        negative: 'Patriarchal, landscape, painting, historical'
      },
      {
        name: 'Klimt',
        prompt: 'Klimt style {prompt} . Symbolist, decorative, ornamental, sensual',
        negative: 'simple, bare, abstract, rough'
      },
      {
        name: 'Kusama',
        prompt: 'Kusama style {prompt} . Pop Art, abstract, polka dots, immersive',
        negative: 'plain, monotone, realistic, sparse'
      },
      {
        name: 'Käthe Kollwitz',
        prompt:
          'Käthe Kollwitz style {prompt} . Expressionist, social realism, black and white, human suffering',
        negative: 'Impressionist, aestheticism, color, human joy'
      },
      {
        name: 'Leonid Afremov',
        prompt: '{prompt} . in the style of Leonid Afremov',
        negative: ''
      },
      {
        name: 'Lichtenstein',
        prompt: 'Lichtenstein style {prompt} . Pop art, comic strip, bold, ironic',
        negative: 'realistic, traditional, serious, detailed'
      },
      {
        name: 'Louise Bourgeois',
        prompt: 'Louise Bourgeois style {prompt} . Abstract, psychological, large-scale, organic',
        negative: 'realistic, impersonal, small-scale, geometric'
      },
      {
        name: 'Louise Nevelson',
        prompt:
          'Louise Nevelson style {prompt} . Abstract expressionist, sculpture, monochrome, found objects',
        negative: 'Realist, painting, colorful, new materials'
      },
      {
        name: 'Lucian Freud',
        prompt: 'Lucian Freud style {prompt} . Realistic, impasto, psychological, intimate',
        negative: 'abstract, smooth, impersonal, public'
      },
      {
        name: 'Lucio Fontana',
        prompt: 'Lucio Fontana style {prompt} . Spatialism, monochrome, slashed, minimal',
        negative: 'Futurism, colorful, whole, detailed'
      },
      {
        name: 'Lyonel Feininger',
        prompt:
          'Lyonel Feininger style {prompt} . Expressionist, Cubist, architecture, transparent',
        negative: 'Impressionist, organic, landscape, opaque'
      },
      {
        name: 'Magritte',
        prompt: 'Magritte style {prompt} . Surrealist, thought-provoking, mysterious, realistic',
        negative: 'abstract, obvious, open, unrefined'
      },
      {
        name: 'Man Ray',
        prompt: 'Man Ray style {prompt} . Dada, photography, rayograph, experimental',
        negative: 'Realism, painting, traditional, conventional'
      },
      {
        name: 'Manet',
        prompt: 'Manet style {prompt} . Realistic, impressionistic, bold, contemporary',
        negative: 'abstract, traditional, timid, historical'
      },
      {
        name: 'Marc Chagall',
        prompt: 'Marc Chagall style {prompt} . Dreamlike, vibrant, symbolic, folklore-inspired',
        negative: 'realistic, subdued, literal, modern'
      },
      {
        name: 'Marcel Duchamp',
        prompt: 'Marcel Duchamp style {prompt} . Dada, readymade, conceptual, controversial',
        negative: 'traditional, handmade, decorative, safe'
      },
      {
        name: 'Marina Abramović',
        prompt:
          'Marina Abramović style {prompt} . Performance, endurance, audience participation, minimal',
        negative: 'Sculpture, instant, observer, complex'
      },
      {
        name: 'Mark Rothko',
        prompt:
          'Mark Rothko style {prompt} . Abstract Expressionist, color field, large-scale, emotional',
        negative: 'Pop Art, pattern, small-scale, detached'
      },
      {
        name: 'Mary Cassatt',
        prompt:
          'Mary Cassatt style {prompt} . Impressionist, domestic life, soft colors, loose brushwork',
        negative: 'abstract, public life, vibrant colors, precise'
      },
      {
        name: 'Matisse',
        prompt: 'Matisse style {prompt} . Fauvist, bold colors, loose, decorative',
        negative: 'realistic, subdued colors, detailed, serious'
      },
      {
        name: 'Maurice Sendak',
        prompt:
          "Maurice Sendak style {prompt} . Children's illustration, fantasy, detailed, narrative",
        negative: 'Abstract, adult, minimalist, non-narrative'
      },
      {
        name: 'Max Ernst',
        prompt: 'Max Ernst style {prompt} . Surrealist, collage, frottage, dreamlike',
        negative: 'Realist, oil painting, brushwork, day-to-day'
      },
      {
        name: 'Michelangelo',
        prompt: 'Michelinagelo style {prompt} . High Renaissance, sculptural, detailed, humanistic',
        negative: 'abstract, loose, simplistic, impersonal'
      },
      {
        name: 'Monet',
        prompt: 'Monet style {prompt} . Impressionist, light-filled, loose brushwork, en plein air',
        negative: 'defined, detailed, subdued, studio work'
      },
      {
        name: 'Nam June Paik',
        prompt: 'Nam June Paik style {prompt} . Video art, technological, interactive, large-scale',
        negative: 'painting, traditional, static, small-scale'
      },
      {
        name: 'Norman Rockwell',
        prompt: 'Norman Rockwell style {prompt} . Realistic, narrative, Americana, detailed',
        negative: 'abstract, non-narrative, foreign, minimalist'
      },
      {
        name: 'Olafur Eliasson',
        prompt: 'Olafur Eliasson style {prompt} . Installation, light, environment, perceptual',
        negative: 'Painting, dark, indoors, cognitive'
      },
      {
        name: 'Otto Dix',
        prompt: 'Otto Dix style {prompt} . New Objectivity, war, grotesque, social critique',
        negative: 'Impressionism, peace, beautiful, aesthetic enjoyment'
      },
      {
        name: 'Paul Cézanne',
        prompt:
          'Paul Cézanne style {prompt} . Post-Impressionist, still life, geometric, brushwork',
        negative: 'Impressionist, action, organic, smooth'
      },
      {
        name: 'Paul Gauguin',
        prompt: 'Paul Gauguin style {prompt} . Post-Impressionist, exotic, bold colors, flat',
        negative: 'Impressionist, familiar, muted colors, volumetric'
      },
      {
        name: 'Picasso',
        prompt: 'Picasso style {prompt} . Cubist, geometric, abstract, innovative',
        negative: 'realistic, detailed, smooth, fluid, single perspective'
      },
      {
        name: 'Piero della Francesca',
        prompt:
          'Piero della Francesca style {prompt} . Renaissance, fresco, mathematical, religious',
        negative: 'Contemporary, installation, random, secular'
      },
      {
        name: 'Pierre-Auguste Renoir',
        prompt:
          'Pierre-Auguste Renoir style {prompt} . Impressionist, joyful, light, loose brushwork',
        negative: 'neoclassical, somber, dark, tight brushwork'
      },
      {
        name: 'Piet Mondrian',
        prompt: 'Piet Mondrian style {prompt} . De Stijl, geometric, primary colors, black grid',
        negative: 'organic, multiple colors, no grid, curved lines'
      },
      {
        name: 'Pollock',
        prompt: 'Pollock style {prompt} . Abstract expressionist, gestural, dripping, layered',
        negative: 'sharp, precise, realistic, calm'
      },
      {
        name: 'Rachel Whiteread',
        prompt: 'Rachel Whiteread style {prompt} . Contemporary, sculpture, negative space, cast',
        negative: 'Traditional, drawing, positive space, sketch'
      },
      {
        name: 'Rembrandt',
        prompt: 'Rembrandt style {prompt} . Baroque, chiaroscuro, realistic, emotional',
        negative: 'flat lighting, abstract, impersonal, clean'
      },
      {
        name: 'Rembrandt van Rijn',
        prompt: 'Rembrandt van Rijn style {prompt} . Baroque, self-portrait, chiaroscuro, etching',
        negative: 'Rococo, group portrait, bright, oil painting'
      },
      {
        name: 'Renoir',
        prompt: 'Renoir style {prompt} . Impressionist, vibrant, lively, warm',
        negative: 'dull, calm, detailed, cool colors'
      },
      {
        name: 'René Magritte',
        prompt: 'René Magritte style {prompt} . Surrealist, object, juxtaposition, mystery',
        negative: 'Realist, figure, relation, clarity'
      },
      {
        name: 'Richard Hamilton',
        prompt: 'Richard Hamilton style {prompt} . Pop Art, collage, consumer culture, mixed media',
        negative: 'Impressionism, oil painting, rural life, single medium'
      },
      {
        name: 'Richard Long',
        prompt: 'Richard Long style {prompt} . Land art, circle, natural materials, ephemeral',
        negative: 'Street art, square, synthetic materials, permanent'
      },
      {
        name: 'Richard Serra',
        prompt: 'Richard Serra style {prompt} . Minimalist, sculpture, corten steel, site-specific',
        negative: 'Baroque, painting, canvas, gallery-specific'
      },
      {
        name: 'Robert Rauschenberg',
        prompt: 'Robert Rauschenberg style {prompt} . Neo-Dada, combine, mixed-media, assemblage',
        negative: 'Minimalism, singular material, oil painting, separated'
      },
      {
        name: 'Rodin',
        prompt: 'Rodin style {prompt} . Realistic, expressive, textured, bronze',
        negative: 'smooth, emotionless, polished, painted'
      },
      {
        name: 'Rothko',
        prompt: 'Rothko style {prompt} . Color field, abstract, simple, large-scale',
        negative: 'detailed, small, complex, figurative'
      },
      {
        name: 'Roy Lichtenstein',
        prompt:
          'Roy Lichtenstein style {prompt} . Pop art, comic strip influence, benday dots, bold outlines, primary colors',
        negative: 'abstract, realistic, pastel colors, complex'
      },
      {
        name: 'Salvador Dalí',
        prompt: 'Salvador Dalí style {prompt} . Surrealist, dreamlike, symbolic, detailed',
        negative: 'realistic, ordinary, literal, sketchy, day-to-day, loose, solid'
      },
      {
        name: 'Sandro Botticelli',
        prompt:
          'Sandro Botticelli style {prompt} . Early Renaissance, mythological, linear, vibrant',
        negative: 'Baroque, historical, painterly, subdued'
      },
      {
        name: 'Sarah Lucas',
        prompt: 'Sarah Lucas style {prompt} . YBA, feminist, readymade, provocative',
        negative: 'Old Masters, masculine, handmade, conservative'
      },
      {
        name: 'Sol LeWitt',
        prompt: 'Sol LeWitt style {prompt} . Conceptual, geometric, minimal, instructional',
        negative: 'Expressionist, organic, complex, spontaneous'
      },
      {
        name: 'Sophie Calle',
        prompt: 'Sophie Calle style {prompt} . Conceptual, photography, text, personal',
        negative: 'Abstract, painting, brushwork, universal'
      },
      {
        name: 'Tadao Ando',
        prompt: 'Tadao Ando style {prompt} . Minimalist, concrete, light, water',
        negative: 'Baroque, brick, dark, dry'
      },
      {
        name: 'Takashi Murakami',
        prompt: 'Takashi Murakami style {prompt} . Superflat, pop culture, colorful, cartoonish',
        negative: 'Cubist, high culture, monochrome, realistic'
      },
      {
        name: 'Thomas Gainsborough',
        prompt: 'Thomas Gainsborough style {prompt} . Rococo, landscape, elegant, oil',
        negative: 'Baroque, portrait, casual, pastel'
      },
      {
        name: 'Thomas Kinkade',
        prompt: 'Thomas Kinkade style {prompt} . Romantic, idealized, warm light, detailed',
        negative: 'abstract, harsh, cool light, minimalist'
      },
      {
        name: 'Tomma Abts',
        prompt: 'Tomma Abts style {prompt} . Abstract, geometric, small-scale, acrylic and oil',
        negative: 'Figurative, organic, large-scale, watercolor'
      },
      {
        name: 'Tracey Emin',
        prompt: 'Tracey Emin style {prompt} . YBA, confessional, neon, textile',
        negative: 'Old Masters, universal, oil, marble'
      },
      {
        name: 'Van Gogh',
        prompt: 'Van Gogh style {prompt} . Expressive, impasto, swirling brushwork, vibrant',
        negative: 'realistic, photorealistic, calm, straight lines'
      },
      {
        name: 'Vermeer',
        prompt: 'Vermeer style {prompt} . Baroque, detailed, light, tranquil',
        negative: 'abstract, rough, dark, chaotic'
      },
      {
        name: 'Victo Ngai',
        prompt: '{prompt} . in the style of Victo Ngai, intricate digital art',
        negative: ''
      },
      {
        name: 'Wadim Kashin',
        prompt: '{prompt} . in the style of Wadim Kashin',
        negative: ''
      },
      {
        name: 'Warhol',
        prompt: 'Warhol style {prompt} . Pop art, bold colors, mass production, repetitive',
        negative: 'subdued colors, traditional, unique, serious'
      },
      {
        name: 'Wassily Kandinsky',
        prompt: 'Wassily Kandinsky style {prompt} . Abstract, geometric, vibrant, musical',
        negative: 'realistic, organic, muted, silent'
      },
      {
        name: 'Wayne Thiebaud',
        prompt: 'Wayne Thiebaud style {prompt} . Pop Art, still life, pastel, thick paint',
        negative: 'Cubism, dynamic scenes, vibrant, thin paint'
      },
      {
        name: 'Yayoi Kusama',
        prompt: 'Yayoi Kusama style {prompt} . Contemporary, polka dots, immersive, psychedelic',
        negative: 'traditional, plain, minimalist, calm'
      },
      {
        name: 'Yoko Ono',
        prompt: 'Yoko Ono style {prompt} . Conceptual, performance, instruction, peace',
        negative: 'Realist, still life, detailed, war'
      },
      {
        name: 'Yves Klein',
        prompt: 'Yves Klein style {prompt} . Nouveau réalisme, monochrome, blue, performance',
        negative: 'Pop Art, colorful, red, static'
      },
      {
        name: 'Zaha Hadid',
        prompt: 'Zaha Hadid style {prompt} . Modernist, organic, futuristic, curved',
        negative: 'Classical, geometric, traditional, straight lines'
      }
    ]
  },
  {
    name: 'Cultural Styles',
    styles: [
      {
        name: 'Aboriginal',
        prompt:
          'Aboriginal style {prompt} . dot painting, Dreamtime stories, Australian culture, highly detailed',
        negative: 'non-Australian, line drawing, abstract, undetailed'
      },
      {
        name: 'Aboriginal',
        prompt:
          'Aboriginal style {prompt} . Australian indigenous, dot painting, storytelling, highly detailed',
        negative: 'non-Australian, line drawing, non-narrative, undetailed'
      },
      {
        name: 'Acoma',
        prompt: 'Acoma style {prompt} . Native American, pottery, sky city, highly detailed',
        negative: 'non-Native American, pottery, earth city, undetailed'
      },
      {
        name: 'African',
        prompt: 'African style {prompt} . tribal, symbolic, cultural, highly detailed',
        negative: 'non-African, abstract, non-cultural, undetailed'
      },
      {
        name: 'Ainu',
        prompt:
          'Ainu style {prompt} . Japanese indigenous, wood carving, bear worship, highly detailed',
        negative: 'non-Japanese, stone carving, dragon worship, undetailed'
      },
      {
        name: 'Akan',
        prompt: 'Akan style {prompt} . African, gold weights, symbolic, highly detailed',
        negative: 'non-African, silver weights, literal, undetailed'
      },
      {
        name: 'Anasazi',
        prompt:
          'Anasazi style {prompt} . Native American, pottery, black-on-white, highly detailed',
        negative: 'non-Native American, pottery, color-on-color, undetailed'
      },
      {
        name: 'Apache',
        prompt: 'Apache style {prompt} . Native American, basketry, coiled, highly detailed',
        negative: 'non-Native American, pottery, thrown, undetailed'
      },
      {
        name: 'Art Deco',
        prompt: 'Art Deco style {prompt} . modern, geometric, luxury, highly detailed',
        negative: 'vintage, organic, minimalism, undetailed'
      },
      {
        name: 'Art Nouveau',
        prompt:
          'Art Nouveau style {prompt} . decorative, nature-inspired, curved lines, highly detailed',
        negative: 'functional, geometric, straight lines, undetailed'
      },
      {
        name: 'Assyrian',
        prompt:
          'Assyrian style {prompt} . ancient Mesopotamia, relief, war scenes, highly detailed',
        negative: 'modern, oil painting, peaceful scenes, undetailed'
      },
      {
        name: 'Aztec',
        prompt: 'Aztec style {prompt} . ancient Mexico, symbolic, cultural, highly detailed',
        negative: 'modern, abstract, non-cultural, undetailed'
      },
      {
        name: 'Babylonian',
        prompt:
          'Babylonian style {prompt} . ancient Mesopotamia, law codes, stone steles, highly detailed',
        negative: 'modern, lawless, paper books, undetailed'
      },
      {
        name: 'Baga',
        prompt: 'Baga style {prompt} . African, mask, spiritual, highly detailed',
        negative: 'non-African, mask, secular, undetailed'
      },
      {
        name: 'Baroque',
        prompt: 'Baroque style {prompt} . grandeur, drama, chiaroscuro, highly detailed',
        negative: 'minimalist, calm, flat, undetailed'
      },
      {
        name: 'Batik',
        prompt: 'Batik style {prompt} . Indonesian, resist dyeing, floral, highly detailed',
        negative: 'non-Indonesian, direct dyeing, geometric, undetailed'
      },
      {
        name: 'Berber',
        prompt: 'Berber style {prompt} . North African, jewelry, silver, highly detailed',
        negative: 'non-North African, clothing, cotton, undetailed'
      },
      {
        name: 'Biedermeier',
        prompt:
          'Biedermeier style {prompt} . 19th century, domestic, unpretentious, highly detailed',
        negative: '21st century, public, pretentious, undetailed'
      },
      {
        name: 'Byzantine',
        prompt: 'Byzantine style {prompt} . religious, iconography, gold, highly detailed, mosaics',
        negative: 'secular, simple, bronze, minimalist, paintings'
      },
      {
        name: 'Carolingian',
        prompt:
          'Carolingian style {prompt} . medieval Europe, illuminatedmanuscripts, luxury, highly detailed',
        negative: 'modern, paperback books, simplicity, undetailed'
      },
      {
        name: 'Celtic',
        prompt:
          'Celtic style {prompt} . geometric patterns, intricate knots, medieval, highly detailed',
        negative: 'random, simplistic, modern, undetailed'
      },
      {
        name: 'Cherokee',
        prompt: 'Cherokee style {prompt} . Native American, pottery, stamped, highly detailed',
        negative: 'non-Native American, pottery, painted, undetailed'
      },
      {
        name: 'Chola',
        prompt: 'Chola style {prompt} . Indian, bronze, dancing Shiva, highly detailed',
        negative: 'non-Indian, marble, sitting Buddha, undetailed'
      },
      {
        name: 'Cloisonné',
        prompt: 'Cloisonné style {prompt} . metalwork, enamel, intricate, highly detailed',
        negative: 'woodwork, paint, simple, undetailed'
      },
      {
        name: 'Constructivist',
        prompt: 'Constructivist style {prompt} . industrial, geometric, socialist, highly detailed',
        negative: 'organic, round, capitalist, undetailed'
      },
      {
        name: 'Cree',
        prompt: 'Cree style {prompt} . Native American, hide, clothing, highly detailed',
        negative: 'non-Native American, synthetic material, clothing, undetailed'
      },
      {
        name: 'Cubist',
        prompt: 'Cubist style {prompt} . geometric, multi-perspective, fragmented, highly detailed',
        negative: 'organic, single perspective, whole, undetailed'
      },
      {
        name: 'Dada',
        prompt: 'Dada style {prompt} . absurd, anti-art, randomness, highly detailed',
        negative: 'rational, pro-art, order, undetailed'
      },
      {
        name: 'Dogon',
        prompt: 'Dogon style {prompt} . African, wood carving, spiritual, highly detailed',
        negative: 'non-African, stone carving, secular, undetailed'
      },
      {
        name: 'Edo',
        prompt: 'Edo style {prompt} . Japanese, woodblock prints, floating world, highly detailed',
        negative: 'non-Japanese, oil painting, real world, undetailed'
      },
      {
        name: 'Egyptian',
        prompt:
          'Egyptian style {prompt} . hieroglyphs, gods and goddesses, Pharaohs, highly detailed',
        negative: 'non-Egyptian, text-free, secular, undetailed'
      },
      {
        name: 'Etruscan',
        prompt:
          'Etruscan style {prompt} . ancient Italy, bronze, mythological scenes, highly detailed',
        negative: 'modern, steel, realistic scenes, undetailed'
      },
      {
        name: 'Expressionist',
        prompt:
          'Expressionist style {prompt} . emotional, distorted, individual perspective, highly detailed',
        negative: 'unemotional, realistic, collective perspective, undetailed'
      },
      {
        name: 'Fang',
        prompt: 'Fang style {prompt} . African, mask, ceremonial, highly detailed',
        negative: 'non-African, mask, recreational, undetailed'
      },
      {
        name: 'Fauvist',
        prompt:
          'Fauvist style {prompt} . bold color, wild brushwork, simplification, highly detailed',
        negative: 'muted color, careful brushwork, detail, undetailed'
      },
      {
        name: 'Fremont',
        prompt: 'Fremont style {prompt} . Native American, petroglyphs, rock art, highly detailed',
        negative: 'non-Native American, graffiti, wall art, undetailed'
      },
      {
        name: 'Futurist',
        prompt: 'Futurist style {prompt} . dynamic, technology, speed, highly detailed',
        negative: 'static, nature, slow, undetailed'
      },
      {
        name: 'Goryeo',
        prompt: 'Goryeo style {prompt} . Korean, celadon, inlay, highly detailed',
        negative: 'non-Korean, terra cotta, relief, undetailed'
      },
      {
        name: 'Gothic',
        prompt: 'Gothic style {prompt} . medieval, pointed arches, stained glass, highly detailed',
        negative: 'modern, round arches, clear glass, undetailed'
      },
      {
        name: 'Greek Classical',
        prompt: 'Greek Classical style {prompt} . ancient, mythology, balanced, highly detailed',
        negative: 'modern, everyday life, unbalanced, undetailed'
      },
      {
        name: 'Gupta',
        prompt: 'Gupta style {prompt} . Indian, ancient, sculpture, highly detailed',
        negative: 'non-Indian, modern, painting, undetailed'
      },
      {
        name: 'Haida',
        prompt: 'Haida style {prompt} . Native American, form line, nature, highly detailed',
        negative: 'non-Native American, abstract, urban, undetailed'
      },
      {
        name: 'Han',
        prompt: 'Han style {prompt} . Chinese, ancient, stone relief, highly detailed',
        negative: 'non-Chinese, modern, oil painting, undetailed'
      },
      {
        name: 'Hanami',
        prompt: 'Hanami style {prompt} . Japanese, cherry blossoms,spring, highly detailed',
        negative: 'non-Japanese, winter, abstract, undetailed'
      },
      {
        name: 'Hellenistic',
        prompt: 'Hellenistic style {prompt} . ancient Greek, dynamic, emotional, highly detailed',
        negative: 'modern, static, unemotional, undetailed'
      },
      {
        name: 'Hohokam',
        prompt: 'Hohokam style {prompt} . Native American, pottery, red-on-buff, highly detailed',
        negative: 'non-Native American, pottery, blue-on-cream, undetailed'
      },
      {
        name: 'Hopi',
        prompt: 'Hopi style {prompt} . Native American, kachina dolls, spiritual, highly detailed',
        negative: 'non-Native American, action figures, secular, undetailed'
      },
      {
        name: 'Huichol',
        prompt: 'Huichol style {prompt} . Mexican, yarn painting, spiritual, highly detailed',
        negative: 'non-Mexican, oil painting, secular, undetailed'
      },
      {
        name: 'Impressionist',
        prompt:
          'Impressionist style {prompt} . loose brushwork, light and color, ordinary subjects, highly detailed',
        negative: 'tight brushwork, black and white, extraordinary subjects, undetailed'
      },
      {
        name: 'Inca',
        prompt: 'Inca style {prompt} . ancient Peru, stonework, terraces, highly detailed',
        negative: 'modern, woodwork, flat plains, undetailed'
      },
      {
        name: 'Inuit',
        prompt: 'Inuit style {prompt} . Arctic, native, animal themes, highly detailed',
        negative: 'tropical, non-native, human themes, undetailed'
      },
      {
        name: 'Inuit',
        prompt: 'Inuit style {prompt} . Arctic, stone carving, animal figures, highly detailed',
        negative: 'tropical, wood carving, human figures, undetailed'
      },
      {
        name: 'Iznik',
        prompt: 'Iznik style {prompt} . Turkish, ceramic, floral, highly detailed',
        negative: 'non-Turkish, canvas, geometric, undetailed'
      },
      {
        name: 'Joseon',
        prompt: 'Joseon style {prompt} . Korean, Confucian, painting, highly detailed',
        negative: 'non-Korean, Taoist, sculpture, undetailed'
      },
      {
        name: 'Khokhloma',
        prompt: 'Khokhloma style {prompt} . Russian, folk art, floral, highly detailed',
        negative: 'non-Russian, fine art, geometric, undetailed'
      },
      {
        name: 'Kuba',
        prompt: 'Kuba style {prompt} . African, textile, raffia, highly detailed',
        negative: 'non-African, metalwork, steel, undetailed'
      },
      {
        name: 'Laguna',
        prompt: 'Laguna style {prompt} . Native American, pottery, polychrome, highly detailed',
        negative: 'non-Native American, pottery, monochrome, undetailed'
      },
      {
        name: 'Lakota',
        prompt: 'Lakota style {prompt} . Native American, beadwork, clothing, highly detailed',
        negative: 'non-Native American, sequin work, banners, undetailed'
      },
      {
        name: 'Maasai',
        prompt: 'Maasai style {prompt} . African, beadwork, jewelry, highly detailed',
        negative: 'non-African, macramé, wall hanging, undetailed'
      },
      {
        name: 'Mandala',
        prompt: 'Mandala style {prompt} . spiritual, geometric, symmetrical, highly detailed',
        negative: 'secular, organic, asymmetrical, undetailed'
      },
      {
        name: 'Maori',
        prompt: 'Maori style {prompt} . New Zealand, tribal, spiritual, highly detailed',
        negative: 'non-New Zealand, non-tribal, secular, undetailed'
      },
      {
        name: 'Maori',
        prompt: 'Maori style {prompt} . New Zealand, tattoo, spiritual, highly detailed',
        negative: 'non-New Zealand, body paint, secular, undetailed'
      },
      {
        name: 'Mayan',
        prompt:
          'Mayan style {prompt} . glyphs, ancient civilization, detailed carvings, highly detailed',
        negative: 'modern, non-Mayan, simplistic, undetailed'
      },
      {
        name: 'Merovingian',
        prompt:
          'Merovingian style {prompt} . medieval France, jewelry, garnet cloisonné, highly detailed',
        negative: 'modern, clothing, sapphire pavé, undetailed'
      },
      {
        name: 'Mimbres',
        prompt: 'Mimbres style {prompt} . Native American, pottery, figurative, highly detailed',
        negative: 'non-Native American, pottery, abstract, undetailed'
      },
      {
        name: 'Ming',
        prompt: 'Ming style {prompt} . Chinese, elegant, pottery, highly detailed',
        negative: 'non-Chinese, rustic, painting, undetailed'
      },
      {
        name: 'Minimalist',
        prompt: 'Minimalist style {prompt} . simple, functional, unadorned, highly detailed',
        negative: 'complex, decorative, adorned, undetailed'
      },
      {
        name: 'Minoan',
        prompt: 'Minoan style {prompt} . ancient Crete, frescoes, sea life, highly detailed',
        negative: 'modern, oil painting, land animals, undetailed'
      },
      {
        name: 'Mississippian',
        prompt:
          'Mississippian style {prompt} . Native American, stone carving, ceremonial, highly detailed',
        negative: 'non-Native American, wood carving, everyday, undetailed'
      },
      {
        name: 'Mixtec',
        prompt: 'Mixtec style {prompt} . ancient Mexico, codices, turquoise, highly detailed',
        negative: 'modern, novels, gold, undetailed'
      },
      {
        name: 'Mogollon',
        prompt: 'Mogollon style {prompt} . Native American, pottery, geometric, highly detailed',
        negative: 'non-Native American, pottery, organic, undetailed'
      },
      {
        name: 'Mohawk',
        prompt: 'Mohawk style {prompt} . Native American, sweetgrass, basketry, highly detailed',
        negative: 'non-Native American, bamboo, basketry, undetailed'
      },
      {
        name: 'Moorish',
        prompt: 'Moorish style {prompt} . Islamic, geometric, Andalusian, highly detailed',
        negative: 'non-Islamic, organic, non-Andalusian, undetailed'
      },
      {
        name: 'Mughal',
        prompt:
          'Mughal style {prompt} . Indian and Persian influence, miniature paintings, highly detailed',
        negative: 'non-Indian, non-Persian, large-scale, undetailed'
      },
      {
        name: 'Mycenaean',
        prompt: 'Mycenaean style {prompt} . ancient Greece, gold, death mask, highly detailed',
        negative: 'modern, bronze, life mask, undetailed'
      },
      {
        name: 'Native American',
        prompt:
          'Native American style {prompt} . traditional patterns, tribal, cultural symbols, highly detailed',
        negative: 'modern, non-tribal, abstract, undetailed'
      },
      {
        name: 'Navajo',
        prompt: 'Navajo style {prompt} . Native American, textile, rug weaving, highly detailed',
        negative: 'non-Native American, metalwork, jewelry making, undetailed'
      },
      {
        name: 'Nazca',
        prompt: 'Nazca style {prompt} . ancient Peru, geoglyphs, desert, highly detailed',
        negative: 'modern, graffiti, urban, undetailed'
      },
      {
        name: 'Ndebele',
        prompt: 'Ndebele style {prompt} . African, geometric, house painting, highly detailed',
        negative: 'non-African, organic, canvas painting, undetailed'
      },
      {
        name: 'Ndebele',
        prompt: 'Ndebele style {prompt} . African, mural art, homes, highly detailed',
        negative: 'non-African, canvas art, studios, undetailed'
      },
      {
        name: 'Neoclassical',
        prompt:
          'Neoclassical style {prompt} . ancient Rome and Greece, rational, heroic, highly detailed',
        negative: 'modern, emotional, ordinary, undetailed'
      },
      {
        name: 'Nordic',
        prompt: 'Nordic style {prompt} . Scandinavian, minimal, nature, highly detailed',
        negative: 'non-Scandinavian, maximal, urban, undetailed'
      },
      {
        name: 'Norse',
        prompt: 'Norse style {prompt} . Viking, runic, wood carving, highly detailed',
        negative: 'non-Viking, Latin script, metalwork, undetailed'
      },
      {
        name: 'Ojibwe',
        prompt: 'Ojibwe style {prompt} . Native American, birch bark, canoes, highly detailed',
        negative: 'non-Native American, pine bark, rafts, undetailed'
      },
      {
        name: 'Olmec',
        prompt: 'Olmec style {prompt} . ancient Mexico, colossal heads, basalt, highly detailed',
        negative: 'modern, miniature hands, marble, undetailed'
      },
      {
        name: 'Osage',
        prompt: 'Osage style {prompt} . Native American, ribbon work, floral, highly detailed',
        negative: 'non-Native American, beadwork, geometric, undetailed'
      },
      {
        name: 'Otomi',
        prompt: 'Otomi style {prompt} . Mexican, textile, embroidery, highly detailed',
        negative: 'non-Mexican, metalwork, hammering, undetailed'
      },
      {
        name: 'Ottoman',
        prompt: 'Ottoman style {prompt} . Islamic, calligraphy, miniatures, highly detailed',
        negative: 'non-Islamic, typography, large-scale, undetailed'
      },
      {
        name: 'Ottonian',
        prompt:
          'Ottonian style {prompt} . medieval Germany, religious art, manuscripts, highly detailed',
        negative: 'modern, secular art, newspapers, undetailed'
      },
      {
        name: 'Pallava',
        prompt:
          'Pallava style {prompt} . Indian, Dravidian architecture, sculpture, highly detailed',
        negative: 'non-Indian, Mughal architecture, painting, undetailed'
      },
      {
        name: 'Persian Miniature',
        prompt:
          'Persian Miniature style {prompt} . Middle Eastern, intricate, storytelling, highly detailed',
        negative: 'Western, simple, non-narrative, undetailed'
      },
      {
        name: 'Pomo',
        prompt: 'Pomo style {prompt} . Native American, basketry, feathers, highly detailed',
        negative: 'non-Native American, basketry, beads, undetailed'
      },
      {
        name: 'Pop Art',
        prompt: 'Pop Art style {prompt} . popular culture, advertising, bold, highly detailed',
        negative: 'high art, non-commercial, muted, undetailed'
      },
      {
        name: 'Pre-Columbian',
        prompt:
          'Pre-Columbian style {prompt} . ancient Americas, native, cultural, highly detailed',
        negative: 'modern, non-American, abstract, undetailed'
      },
      {
        name: 'Pre-Raphaelite',
        prompt:
          'Pre-Raphaelite style {prompt} . romantic, vivid color, medieval subjects, highly detailed',
        negative: 'realistic, muted color, modern subjects, undetailed'
      },
      {
        name: 'Precisionist',
        prompt: 'Precisionist style {prompt} . industrial, crisp, geometric, highly detailed',
        negative: 'organic, blurry, round, undetailed'
      },
      {
        name: 'Pueblo',
        prompt: 'Pueblo style {prompt} . Native American, traditional, pottery, highly detailed',
        negative: 'non-Native American, modern, photography, undetailed'
      },
      {
        name: 'Renaissance',
        prompt: 'Renaissance style {prompt} . humanism, realism, perspective, highly detailed',
        negative: 'abstract, surreal, flat, undetailed'
      },
      {
        name: 'Rococo',
        prompt: 'Rococo style {prompt} . ornate, pastel, love and nature themes, highly detailed',
        negative: 'simple, dark, abstract, undetailed'
      },
      {
        name: 'Romanesque',
        prompt: 'Romanesque style {prompt} . medieval, religious, thick walls, highly detailed',
        negative: 'modern, secular, transparent, undetailed'
      },
      {
        name: 'Russian Iconography',
        prompt: 'Russian Iconography style {prompt} . religious, orthodox, gold, highly detailed',
        negative: 'secular, non-orthodox, silver, undetailed'
      },
      {
        name: 'Saami',
        prompt:
          'Saami style {prompt} . Nordic indigenous, duodji (craft), reindeer, highly detailed',
        negative: 'non-Nordic, factory-made, cow, undetailed'
      },
      {
        name: 'Salado',
        prompt: 'Salado style {prompt} . Native American, pottery, polychrome, highly detailed',
        negative: 'non-Native American, pottery, duochrome, undetailed'
      },
      {
        name: 'San',
        prompt: 'San style {prompt} . African, rock art, animal figures, highly detailed',
        negative: 'non-African, digital art, human figures, undetailed'
      },
      {
        name: 'Seminole',
        prompt: 'Seminole style {prompt} . Native American, patchwork, clothing, highly detailed',
        negative: 'non-Native American, knitting, clothing, undetailed'
      },
      {
        name: 'Sicán',
        prompt:
          'Sicán style {prompt} . ancient Peru, gold masks, funerary objects, highly detailed',
        negative: 'modern, wood masks, everyday objects, undetailed'
      },
      {
        name: 'Sioux',
        prompt: 'Sioux style {prompt} . Native American, quillwork, porcupine, highly detailed',
        negative: 'non-Native American, embroidery, silk, undetailed'
      },
      {
        name: 'Socialist Realist',
        prompt:
          'Socialist Realist style {prompt} . idealized, political, proletarian, highly detailed',
        negative: 'realistic, apolitical, bourgeois, undetailed'
      },
      {
        name: 'Sumerian',
        prompt:
          'Sumerian style {prompt} . ancient Mesopotamia, cuneiform, clay tablets, highly detailed',
        negative: 'modern, Latin script, parchment scrolls, undetailed'
      },
      {
        name: 'Sumi-e',
        prompt: 'Sumi-e style {prompt} . Japanese ink painting, minimal, nature, highly detailed',
        negative: 'non-Japanese, colorful, urban, undetailed'
      },
      {
        name: 'Suprematism',
        prompt:
          'Suprematism style {prompt} . geometric, non-objective, primary colors, highly detailed',
        negative: 'organic, objective, pastel colors, undetailed'
      },
      {
        name: 'Surrealist',
        prompt:
          'Surrealist style {prompt} . dreamlike, irrational, unexpected juxtapositions, highly detailed',
        negative: 'realistic, rational, expected combinations, undetailed'
      },
      {
        name: 'Symbolist',
        prompt: 'Symbolist style {prompt} . mythical, dreamy, spiritual, highly detailed',
        negative: 'realistic, practical, secular, undetailed'
      },
      {
        name: 'Tang',
        prompt: 'Tang style {prompt} . Chinese, ancient, sculpture, highly detailed',
        negative: 'non-Chinese, modern, photography, undetailed'
      },
      {
        name: 'Thracian',
        prompt: 'Thracian style {prompt} . ancient Balkans, gold, ritual objects, highly detailed',
        negative: 'modern, wood, everyday objects, undetailed'
      },
      {
        name: 'Tibetan Thangka',
        prompt: 'Tibetan Thangka style {prompt} . spiritual, Buddhist, meditation, highly detailed',
        negative: 'secular, non-Buddhist, disturbing, undetailed'
      },
      {
        name: 'Tlingit',
        prompt: 'Tlingit style {prompt} . Native American, totem poles, spiritual, highly detailed',
        negative: 'non-Native American, street signs, secular, undetailed'
      },
      {
        name: 'Toltec',
        prompt:
          'Toltec style {prompt} . ancient Mexico, monumental architecture, relief, highly detailed',
        negative: 'modern, small-scale models, oil painting, undetailed'
      },
      {
        name: 'Tribal',
        prompt: 'Tribal style {prompt} . African, indigenous, symbolic, highly detailed',
        negative: 'non-African, mainstream, abstract, undetailed'
      },
      {
        name: 'Ukiyo-e',
        prompt:
          'Ukiyo-e style {prompt} . Japanese, woodblock prints, floating world, highly detailed',
        negative: 'non-Japanese, digital art, real world, undetailed'
      },
      {
        name: 'Victorian',
        prompt: 'Victorian style {prompt} . 19th century, ornate, romantic, highly detailed',
        negative: '21st century, minimal, unemotional, undetailed'
      },
      {
        name: 'Yoruba',
        prompt: 'Yoruba style {prompt} . African, sculpture, spiritual, highly detailed',
        negative: 'non-African, photography, secular, undetailed'
      },
      {
        name: 'Yupik',
        prompt: 'Yupik style {prompt} . Native American, mask, ceremonial, highly detailed',
        negative: 'non-Native American, mask, recreational, undetailed'
      },
      {
        name: 'Zapotec',
        prompt: 'Zapotec style {prompt} . ancient Mexico, urns, jaguars, highly detailed',
        negative: 'modern, vases, dogs, undetailed'
      },
      {
        name: 'Zulu',
        prompt: 'Zulu style {prompt} . African, basketry, coiled, highly detailed',
        negative: 'non-African, pottery, thrown, undetailed'
      },
      {
        name: 'Zuni',
        prompt: 'Zuni style {prompt} . Native American, jewelry, silver, highly detailed',
        negative: 'non-Native American, clothing, cotton, undetailed'
      }
    ]
  }
]
