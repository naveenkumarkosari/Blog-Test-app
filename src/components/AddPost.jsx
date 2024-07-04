import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  title: z.string().min(1, { message: "title is required" }),
  content: z.string().min(1, { message: "content is required" }),
  author: z.string().min(1, { message: "author is required" }),
});

function AddPost({ data, setData }) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (formData) => {
    console.log(formData);
    const newData = [...data, formData];
    setData(newData);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="input-group input-group-lg mb-3 w-50 p-3">
        <span className="input-group-text" id="inputGroup-sizing-lg">
          Title
        </span>
        <input
          {...register("title")}
          type="text"
          className="form-control border border-success "
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
        />
        {errors.title?.message && <p>{errors.title?.message}</p>}
      </div>

      <div className="input-group input-group-lg mb-3">
      <span className="input-group-text" id="inputGroup-sizing-lg">
          content
        </span>
        <input
          type="text"
          {...register("content")}
        
          className="form-control "
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
        />
        {errors.content?.message && <p>{errors.content?.message}</p>}
      </div>

      <div className="input-group input-group-lg mb-3">
      <span className="input-group-text" id="inputGroup-sizing-lg ">
          Author
        </span>
        <input
          type="text"
          {...register("author")}
        
          className="form-control "
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
        />
        {errors.author?.message && <p>{errors.author?.message}</p>}
      </div>

      <button type="submit" className="btn btn-success">Add new post</button>
    </form>
  );
}

export default AddPost;
