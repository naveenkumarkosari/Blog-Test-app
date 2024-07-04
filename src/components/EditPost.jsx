import React from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  title: z.string().min(1, { message: "title is required" }),
  content: z.string().min(1, { message: "content is required" }),
  author: z.string().min(1, { message: "author is required" }),
});

function EditPost({ data, setData }) {
  const { id } = useParams();
  const currData = data[id];
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: currData
  });
  
  const onSubmit = (formData) => {
    console.log(formData)
    const newData = data.map((item, index) => index === parseInt(id) ? formData : item);
    setData(newData);
    navigate('/');
  };
  
  const onDelete = () => {
    const newData = data.filter((_, index) => index !== parseInt(id));
    setData(newData);
    navigate('/');
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="form-group ">
      <div className="input-group input-group-lg mb-3">
        <span className="input-group-text" id="inputGroup-sizing-lg">
          Title
        </span>
        <input
          {...register("title")}
          type="text"
          className="form-control border border-success"
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
        
        <button type="submit" className="btn btn-warning">Update post</button>
        <button type="button" onClick={onDelete} className="btn btn-danger ml-1">Delete</button>
      </form>
    </div>
  );
}

export default EditPost;

