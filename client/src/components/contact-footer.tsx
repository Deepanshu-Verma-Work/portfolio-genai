import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight } from "lucide-react";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactFooter() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Transmission Sent",
      description: "We have received your signal. Stand by for response.",
    });
    form.reset();
  }

  return (
    <footer className="bg-foreground text-background py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Abstract Decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-background/20" />
      <div className="absolute -left-[10%] -bottom-[50%] w-[50%] h-[100%] bg-background/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
        {/* Text Content */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-[12vw] md:text-[6vw] leading-[0.8] font-display font-bold uppercase tracking-tighter mb-8">
              Let's<br />Build
            </h2>
            <p className="font-heading text-lg md:text-xl text-background/60 max-w-md">
              Initiate a collaboration. We are ready to architect your next digital milestone.
            </p>
          </div>
          
          <div className="hidden md:block mt-12 space-y-2 font-mono text-xs text-background/40 uppercase tracking-widest">
            <p>San Francisco, CA</p>
            <p>Tokyo, JP</p>
            <p>Berlin, DE</p>
          </div>
        </div>

        {/* Form */}
        <div className="relative z-10">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-background/60 font-mono uppercase tracking-widest text-xs">System ID (Email)</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="enter@coordinates.com" 
                        {...field} 
                        className="bg-transparent border-0 border-b border-background/20 rounded-none px-0 py-6 text-xl md:text-2xl font-display placeholder:text-background/20 focus-visible:ring-0 focus-visible:border-background transition-colors"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-background/60 font-mono uppercase tracking-widest text-xs">Transmission Data</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Describe your architectural requirements..." 
                        {...field} 
                        className="bg-transparent border-0 border-b border-background/20 rounded-none px-0 py-6 text-xl md:text-2xl font-heading min-h-[150px] resize-none placeholder:text-background/20 focus-visible:ring-0 focus-visible:border-background transition-colors"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="group bg-background text-foreground hover:bg-background/90 rounded-full px-8 py-6 text-lg font-display font-bold uppercase tracking-tight transition-all w-full md:w-auto flex items-center justify-center gap-2"
              >
                Transmit Signal
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </Form>
        </div>
      </div>
      
      {/* Mobile Footer Info */}
      <div className="md:hidden mt-16 pt-8 border-t border-background/10 space-y-2 font-mono text-xs text-background/40 uppercase tracking-widest text-center">
        <p>San Francisco • Tokyo • Berlin</p>
        <p>© 2025 Structural</p>
      </div>
    </footer>
  );
}
