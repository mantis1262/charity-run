import { useFormik } from 'formik';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import AccountCta from '../AccountCta/AccountCta';
import { Button } from '../Button/Button';
import scss from './LoginContainer.module.scss';
import translations from './translations';
import { validationSchema } from './validationSchema';
import FormInput from '../FormInput/FormInput';
import { useNavigate } from 'react-router';
import { useIsLoginStore } from '../../Zustand/useIsLoginStore';
import { login } from '../../Zustand/api';
import { useIsLoadingStore } from '../../Zustand/useIsLoadingStore';
import { toast } from 'react-toastify';

function LoginContainer() {
  const { language } = useLanguageStore();
  const t = translations[language];
  const { setIsLoading } = useIsLoadingStore();
  const { setIsLogin } = useIsLoginStore();

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: validationSchema,
    onSubmit: values => {
      const { email, password } = values;
      const loginUser = async () => {
        try {
          setIsLoading(true);
          await login(email, password);
          console.log('Login successful!');
          toast.info('Login successful!');
          setIsLogin(true);
          navigate('/');
        } catch (error: unknown) {
          if (
            typeof error === 'object' &&
            error !== null &&
            'response' in error &&
            typeof error.response === 'object' &&
            error.response !== null &&
            'status' in error.response &&
            'data' in error.response
          ) {
            const axiosError = error as {
              response: { status: number; data: { message: string } };
            };
            if (axiosError.response.status === 401) {
              toast.error(axiosError.response.data.message);
            } else {
              toast.error('An error occurred during login.');
            }
          }
        } finally {
          setIsLoading(false);
        }
      };
      loginUser();
      formik.resetForm();
    },
  });

  const handleNavigate = () => {
    navigate('/register');
  };

  return (
    <div className={scss.container}>
      <form className={scss.form} onSubmit={formik.handleSubmit}>
        <h2 className={scss.heading}>{t.heading}</h2>
        <FormInput
          error={{
            condition: Boolean(formik.touched.email && formik.errors.email),
            message: String(formik.errors.email),
          }}
          label={t.email}
          id="login-email"
        >
          <input
            type="text"
            name="email"
            id="login-email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </FormInput>
        <FormInput
          label={t.password}
          id="login-password"
          error={{
            condition: Boolean(
              formik.touched.password && formik.errors.password
            ),
            message: String(formik.errors.password),
          }}
        >
          <input
            type="text"
            name="password"
            id="login-password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
        </FormInput>
        {/* <Input
          formik={formik as unknown as FormikProps<FormikValues>}
          label={t.email}
          id="login-email"
          name="email"
        /> */}
        {/* <Input
          formik={formik as unknown as FormikProps<FormikValues>}
          label={t.password}
          id="login-password"
          name="password"
        /> */}

        <Button type="submit" content={t.button} onClick={() => {}} />
      </form>
      <AccountCta type="register" onClick={handleNavigate} />
    </div>
  );
}

export default LoginContainer;
