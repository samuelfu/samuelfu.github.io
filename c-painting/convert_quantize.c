#include <stdio.h>
#include <stdlib.h>
#define STB_IMAGE_IMPLEMENTATION
#include "stb_image.h"
#define STB_IMAGE_WRITE_IMPLEMENTATION
#include "stb_image_write.h"

// Function to quantize the colors
void color_quantize(unsigned char *data, int width, int height, int channels, int levels) {
    int color_div = 256 / levels;
    for (int i = 0; i < width * height * channels; i += channels) {
        for (int c = 0; c < channels; c++) {  // Apply to RGB, not A if present
            int quantized = (data[i + c] / color_div) * color_div + color_div / 2;
            data[i + c] = (unsigned char)quantized;
        }
    }
}

int main(int argc, char **argv) {
    if (argc < 3) {
        printf("Usage: %s <inputfile> <outputfile>\n", argv[0]);
        return 0;
    }

    int width, height, channels;
    unsigned char *img = stbi_load(argv[1], &width, &height, &channels, 0);
    if (img == NULL) {
        printf("Error in loading the image\n");
        exit(1);
    }

    int levels = 4; // Example: Reduce each color channel to 4 levels
    color_quantize(img, width, height, channels, levels);

    stbi_write_jpg(argv[2], width, height, channels, img, 100);
    stbi_image_free(img);

    return 0;
}

