import { transferClients } from "@src/client"
import parseLinks from "@src/utils/parseLinks"
import { omit } from "lodash"

const shapeCtaInline = async (component: Record<string, any>) => {
  if (!component?.cta?._ref) {
    console.warn(`CTA reference not found in component ${component._id}. Skipping...`)
    return
  }

  const ctaData = await transferClients.from.fetch(`*[_id == $id][0]`, { id: component?.cta?._ref })
  
  if (!ctaData) {
    console.warn(`CTA data not found in from for reference ${component?.cta?._ref}. Skipping...`)
    return
  }

  const filteredFields = omit(ctaData, ["bgColor", "overline", "title"])

  return {
    ...filteredFields,
    _type: "cta",
      backgroundImage: ctaData.backgroundImage || {
      _type: 'image',
      asset: {
        _ref:"image-afaed729d30bffe803801a5f356929095e0c50f8-669x516-png",
        _type:"reference"
      },
      lqip:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD9klEQVR4nGNgIA8w/v/PwDR/vzzHjoNSsnvOCwUeucE749ht7kMkm/T//3/GmTONWTftlxTZf03I4uhN3uITdzk2nrjHcefsI67XRLkGRq9atYp52+LFfLsPlOueum6SePYR/8KT99ivHr7F/en4bZk/5x7q/8VrUH19PRMI////n6m7u5u7c8IE1SXz5gXt3TltwoWLiScv39d+c+qewO+Td2X/Hr1q93fXMX+sBjKCvLVq1Sq22bOXiS9YsFp71eIN6lOmzDKYPnNu4aqlS3btWLfo6b51rT92bY/6u/WYyb/DV/X+7jxu8mvhOu1PGOGzf/9+lqVLDwvOm3fMaO6CQ5lr1x6cdnD/iZ7du/dXLF+9bvaqVSvOL58/5+3s1tZfPeV5fzvbI38vXev2fscx/aubD8vvgRsG8tqGDRt4d+zYpLFl3a7IjevOzdi8+cb5Eyfuv3xw/9mTp0+enjh3/tLaFatWrWxratpXkllwOysq/XVWfOrj2srkw9PnRE9bvTmzAe6y3t5ezm27V5geP7298dSxQ4fPHLv24urlp7+ePnn/99Onr3++f//+5d27D/cvX768ffLk6V1RCeldgaGJa/19I3b7eARs9PEMXJCalDUTHmYTJ07k275rhfvl6wcW3L939d7jh49+vHr15t/nz1/+ff367d+XL19+vXn37sWde/fWr1+/MS00KjbWzNphkp6u4VF9Ta17epo6Dy1NLW4hvLxqFduOHctlz144HHTzzs25j589u/vm3dufHz58+Pv2/Ydvj5+/enL6+q1DyzZumlBSUlYdHBg4397G5oKhrs57dWWF38oKcn8MdbV/osTuxG3b2GevW6e5cPvOolU7dx3aunv3x9179/7ate/gi427jpyatmTNnqKa2v3x8XEXoiPCX0WGBf3y93f9Z2Wh/09LXfGfsb72P7hpoaGhzBnFxWI59TVBWTW1C5LzCm5kZOd8LSop/l1cUfmusKzmTnZe8aOMjIxPGWmpv7PSU/+mpkT9C490+2dvZ/BPU1X+l4aSAjzZMFpYuAk5ubp6evr4zfEPDr4XFhnxPTUr/W9hbdHf9PKsb5FxkS+iI8OfZqanfi4tLvxTXJj9Ny0z5F9ghNkfYxOFDwoyktdUFBR2gw0Duc7W1lbR1ta21M7O4biXl9fn9Nz0f1U9tX/Leio+xRclXvYJ8VkWHOg/OS01aWt+XuaDgqLY7wU1nt8S800eOLhp7PXycJ9XVVE7BeZCJjc3NyEbG5sAGyublR6eHi+T8pL/pddk/QpOCr3u7OXSaW9v7+Dh4aEVGRYWHB8fsTSnxP9ZcbPr0+Qim5UZOTH1y5evmnXs6PkTALpGC9gZd9aDAAAAAElFTkSuQmCC"
    },
    content: ctaData.content,
    desktopOrientation: 'horizontal',
    heading: ctaData.title,
    links: parseLinks(ctaData.links)
  }
}

export default shapeCtaInline