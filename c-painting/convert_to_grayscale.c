#include <stdio.h>
#include <stdlib.h>
#define STB_IMAGE_IMPLEMENTATION
#include "stb_image.h"
#define STB_IMAGE_WRITE_IMPLEMENTATION
#include "stb_image_write.h"

// Function to convert to grayscale
void rgb_to_grayscale(unsigned char *data, int width, int height, int channels) {
    for (int i = 0; i < width * height; i++) {
        int index = i * channels;
        unsigned char r = data[index];
        unsigned char g = data[index + 1];
        unsigned char b = data[index + 2];
        // Standard formula for luminance
        unsigned char gray = (unsigned char)(0.299 * r + 0.587 * g + 0.114 * b);
        data[index] = data[index + 1] = data[index + 2] = gray;
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

    rgb_to_grayscale(img, width, height, channels);

    stbi_write_jpg(argv[2], width, height, channels, img, 100);
    stbi_image_free(img);

    return 0;
}

