'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userSchema, UserFormData } from '@/utils/schema';
import { saveToLocalStorage } from '@/utils/storage';
import { useState } from 'react';
import Spinner from './Spinner';

export default function Form() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = (data: UserFormData) => {
    setLoading(true);
    setTimeout(() => {
      saveToLocalStorage('userData', data);
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="text-white space-y-4 max-w-md mx-auto border border-black w-[50%] rounded-md bg-black p-10 ">
      <div className='w-[100%] flex justify-center'>
        <h1>Data-Form</h1>
      </div>
      <div>
        <label className="block mb-1">Nome</label>
        <input
          {...register('name')}
          className="w-full border rounded p-2 placeholder:text-gray-600"
          placeholder="Seu nome"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>
      <div>
        <label className="block mb-1">Email</label>
        <input
          {...register('email')}
          type="email"
          className="w-full border rounded p-2 placeholder:text-gray-600"
          placeholder="Seu email"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block mb-1">Senha</label>
        <input
          {...register('password')}
          type="password"
          className="w-full border rounded p-2 placeholder:text-gray-600"
          placeholder="Sua senha"
        />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
      </div>

      <div>
        <label className="block mb-1">Data de Nascimento</label>
        <input
          {...register('birthDate')}
          type="date"
          className="w-full border rounded p-2 text-gray-600"
        />
        {errors.birthDate && <p className="text-red-500">{errors.birthDate.message}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white rounded p-2"
        disabled={loading}
      >
        {loading ? <Spinner /> : 'Cadastrar'}
      </button>

      {success && <p className="text-green-500 mt-2">Cadastro realizado com sucesso!</p>}
    </form>
  );
}