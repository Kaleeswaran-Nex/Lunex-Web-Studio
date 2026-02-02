from PIL import Image
import sys

def remove_background(input_path, output_path, tolerance=30):
    try:
        img = Image.open(input_path)
        img = img.convert("RGBA")
        datas = img.getdata()
        
        # Get the background color from the top-left pixel
        bg_color = datas[0]
        
        newData = []
        for item in datas:
            # Check if the pixel matches the background color within a tolerance
            if all(abs(item[i] - bg_color[i]) < tolerance for i in range(3)):
                newData.append((255, 255, 255, 0))  # Transparent
            else:
                newData.append(item)
        
        img.putdata(newData)
        img.save(output_path, "PNG")
        print(f"Successfully processed image to {output_path}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    # Hardcoded paths since we are running in a specific context
    input_file = "src/assets/logo_original.png"
    output_file = "src/assets/logo.png"
    remove_background(input_file, output_file)
