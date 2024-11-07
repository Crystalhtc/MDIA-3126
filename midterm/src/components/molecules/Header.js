import Button from "../atoms/Button";

export default function Header({imageData, fetchImages}) {
  
    return (
      <section>
      <h1>Midterm App</h1>
      <Button
        fetchImages={fetchImages}
        imageData={imageData}
      />
    </section>
  );
}

